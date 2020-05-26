/**
 * @fileoverview gRPC-Web generated client stub for nokamoto.github.com.example.library
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  Book,
  CreateBookRequest,
  ListBookRequest,
  ListBookResponse} from './library_pb';

export class LibraryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: CreateBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  createBook(
    request: CreateBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/nokamoto.github.com.example.library.Library/CreateBook',
      request,
      metadata || {},
      this.methodInfoCreateBook,
      callback);
  }

  methodInfoListBook = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBookResponse,
    (request: ListBookRequest) => {
      return request.serializeBinary();
    },
    ListBookResponse.deserializeBinary
  );

  listBook(
    request: ListBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBookResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/nokamoto.github.com.example.library.Library/ListBook',
      request,
      metadata || {},
      this.methodInfoListBook,
      callback);
  }

}

