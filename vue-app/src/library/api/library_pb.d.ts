import * as jspb from "google-protobuf"

export class Book extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    name: string,
    displayName: string,
  }
}

export class CreateBookRequest extends jspb.Message {
  getBook(): Book | undefined;
  setBook(value?: Book): void;
  hasBook(): boolean;
  clearBook(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBookRequest): CreateBookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBookRequest;
  static deserializeBinaryFromReader(message: CreateBookRequest, reader: jspb.BinaryReader): CreateBookRequest;
}

export namespace CreateBookRequest {
  export type AsObject = {
    book?: Book.AsObject,
  }
}

export class ListBookRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookRequest): ListBookRequest.AsObject;
  static serializeBinaryToWriter(message: ListBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookRequest;
  static deserializeBinaryFromReader(message: ListBookRequest, reader: jspb.BinaryReader): ListBookRequest;
}

export namespace ListBookRequest {
  export type AsObject = {
    pageToken: string,
    pageSize: number,
  }
}

export class ListBookResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): void;
  clearBooksList(): void;
  addBooks(value?: Book, index?: number): Book;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookResponse): ListBookResponse.AsObject;
  static serializeBinaryToWriter(message: ListBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookResponse;
  static deserializeBinaryFromReader(message: ListBookResponse, reader: jspb.BinaryReader): ListBookResponse;
}

export namespace ListBookResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    nextPageToken: string,
  }
}

