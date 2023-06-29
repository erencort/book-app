import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BookState {
  data: Book | null;
  loading: boolean;
  error: string;
}

const initialState: BookState = {
  data: null,
  loading: false,
  error: "",
};

const maxResult = 40;
export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async (data: string) => {
    const res = await axios.get<Book>(
      `https://www.googleapis.com/books/v1/volumes?q=${data}&key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&maxResults=${maxResult}`
    );

    return res.data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchBooks.fulfilled,
      (state, action: PayloadAction<Book>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching";
    });
  },
});

export default bookSlice.reducer;

export interface Book {
  kind: string;
  totalItems: number;
  items: Item[];
}

export interface Item {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate: string;
  description?: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  averageRating?: number;
  ratingsCount?: number;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: ListPrice;
  retailPrice?: RetailPrice;
  buyLink?: string;
  offers?: Offer[];
}

export interface ListPrice {
  amount: number;
  currencyCode: string;
}

export interface RetailPrice {
  amount: number;
  currencyCode: string;
}

export interface Offer {
  finskyOfferType: number;
  listPrice: ListPrice2;
  retailPrice: RetailPrice2;
}

export interface ListPrice2 {
  amountInMicros: number;
  currencyCode: string;
}

export interface RetailPrice2 {
  amountInMicros: number;
  currencyCode: string;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface Pdf {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface SearchInfo {
  textSnippet: string;
}
