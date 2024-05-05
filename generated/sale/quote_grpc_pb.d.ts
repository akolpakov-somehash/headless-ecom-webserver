// package: sale
// file: sale/quote.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sale_quote_pb from "../sale/quote_pb";

interface IQuoteServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getQuote: IQuoteServiceService_IGetQuote;
    addProduct: IQuoteServiceService_IAddProduct;
    removeProduct: IQuoteServiceService_IRemoveProduct;
    updateQuantity: IQuoteServiceService_IUpdateQuantity;
}

interface IQuoteServiceService_IGetQuote extends grpc.MethodDefinition<sale_quote_pb.CustomerId, sale_quote_pb.Quote> {
    path: "/sale.QuoteService/GetQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_quote_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.CustomerId>;
    responseSerialize: grpc.serialize<sale_quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<sale_quote_pb.Quote>;
}
interface IQuoteServiceService_IAddProduct extends grpc.MethodDefinition<sale_quote_pb.ProductRequest, sale_quote_pb.Quote> {
    path: "/sale.QuoteService/AddProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<sale_quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<sale_quote_pb.Quote>;
}
interface IQuoteServiceService_IRemoveProduct extends grpc.MethodDefinition<sale_quote_pb.ProductRequest, sale_quote_pb.Quote> {
    path: "/sale.QuoteService/RemoveProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<sale_quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<sale_quote_pb.Quote>;
}
interface IQuoteServiceService_IUpdateQuantity extends grpc.MethodDefinition<sale_quote_pb.ProductRequest, sale_quote_pb.Quote> {
    path: "/sale.QuoteService/UpdateQuantity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<sale_quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<sale_quote_pb.Quote>;
}

export const QuoteServiceService: IQuoteServiceService;

export interface IQuoteServiceServer extends grpc.UntypedServiceImplementation {
    getQuote: grpc.handleUnaryCall<sale_quote_pb.CustomerId, sale_quote_pb.Quote>;
    addProduct: grpc.handleUnaryCall<sale_quote_pb.ProductRequest, sale_quote_pb.Quote>;
    removeProduct: grpc.handleUnaryCall<sale_quote_pb.ProductRequest, sale_quote_pb.Quote>;
    updateQuantity: grpc.handleUnaryCall<sale_quote_pb.ProductRequest, sale_quote_pb.Quote>;
}

export interface IQuoteServiceClient {
    getQuote(request: sale_quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    getQuote(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    getQuote(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
}

export class QuoteServiceClient extends grpc.Client implements IQuoteServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getQuote(request: sale_quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public getQuote(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public getQuote(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: sale_quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: sale_quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_quote_pb.Quote) => void): grpc.ClientUnaryCall;
}
