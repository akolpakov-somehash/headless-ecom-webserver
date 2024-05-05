// package: sale
// file: sale/order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sale_order_pb from "../sale/order_pb";
import * as sale_quote_pb from "../sale/quote_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrders: IOrderServiceService_IGetOrders;
    getOrder: IOrderServiceService_IGetOrder;
    placeOrder: IOrderServiceService_IPlaceOrder;
}

interface IOrderServiceService_IGetOrders extends grpc.MethodDefinition<sale_quote_pb.CustomerId, sale_order_pb.OrderList> {
    path: "/sale.OrderService/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_quote_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.CustomerId>;
    responseSerialize: grpc.serialize<sale_order_pb.OrderList>;
    responseDeserialize: grpc.deserialize<sale_order_pb.OrderList>;
}
interface IOrderServiceService_IGetOrder extends grpc.MethodDefinition<sale_order_pb.OrderId, sale_order_pb.Order> {
    path: "/sale.OrderService/GetOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sale_order_pb.OrderId>;
    requestDeserialize: grpc.deserialize<sale_order_pb.OrderId>;
    responseSerialize: grpc.serialize<sale_order_pb.Order>;
    responseDeserialize: grpc.deserialize<sale_order_pb.Order>;
}
interface IOrderServiceService_IPlaceOrder extends grpc.MethodDefinition<sale_quote_pb.CustomerId, sale_order_pb.ProcessStatus> {
    path: "/sale.OrderService/PlaceOrder";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sale_quote_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<sale_quote_pb.CustomerId>;
    responseSerialize: grpc.serialize<sale_order_pb.ProcessStatus>;
    responseDeserialize: grpc.deserialize<sale_order_pb.ProcessStatus>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    getOrders: grpc.handleUnaryCall<sale_quote_pb.CustomerId, sale_order_pb.OrderList>;
    getOrder: grpc.handleUnaryCall<sale_order_pb.OrderId, sale_order_pb.Order>;
    placeOrder: grpc.handleServerStreamingCall<sale_quote_pb.CustomerId, sale_order_pb.ProcessStatus>;
}

export interface IOrderServiceClient {
    getOrders(request: sale_quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrders(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrders(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrder(request: sale_order_pb.OrderId, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    getOrder(request: sale_order_pb.OrderId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    getOrder(request: sale_order_pb.OrderId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    placeOrder(request: sale_quote_pb.CustomerId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sale_order_pb.ProcessStatus>;
    placeOrder(request: sale_quote_pb.CustomerId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sale_order_pb.ProcessStatus>;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrders(request: sale_quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrders(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrders(request: sale_quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrder(request: sale_order_pb.OrderId, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    public getOrder(request: sale_order_pb.OrderId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    public getOrder(request: sale_order_pb.OrderId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sale_order_pb.Order) => void): grpc.ClientUnaryCall;
    public placeOrder(request: sale_quote_pb.CustomerId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sale_order_pb.ProcessStatus>;
    public placeOrder(request: sale_quote_pb.CustomerId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sale_order_pb.ProcessStatus>;
}
