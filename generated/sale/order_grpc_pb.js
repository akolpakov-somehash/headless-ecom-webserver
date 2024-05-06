// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sale_order_pb = require('../sale/order_pb.js');
var sale_quote_pb = require('../sale/quote_pb.js');

function serialize_sale_CustomerId(arg) {
  if (!(arg instanceof sale_quote_pb.CustomerId)) {
    throw new Error('Expected argument of type sale.CustomerId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sale_CustomerId(buffer_arg) {
  return sale_quote_pb.CustomerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sale_Order(arg) {
  if (!(arg instanceof sale_order_pb.Order)) {
    throw new Error('Expected argument of type sale.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sale_Order(buffer_arg) {
  return sale_order_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sale_OrderId(arg) {
  if (!(arg instanceof sale_order_pb.OrderId)) {
    throw new Error('Expected argument of type sale.OrderId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sale_OrderId(buffer_arg) {
  return sale_order_pb.OrderId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sale_OrderList(arg) {
  if (!(arg instanceof sale_order_pb.OrderList)) {
    throw new Error('Expected argument of type sale.OrderList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sale_OrderList(buffer_arg) {
  return sale_order_pb.OrderList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sale_ProcessStatus(arg) {
  if (!(arg instanceof sale_order_pb.ProcessStatus)) {
    throw new Error('Expected argument of type sale.ProcessStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sale_ProcessStatus(buffer_arg) {
  return sale_order_pb.ProcessStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  getOrders: {
    path: '/sale.OrderService/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: sale_quote_pb.CustomerId,
    responseType: sale_order_pb.OrderList,
    requestSerialize: serialize_sale_CustomerId,
    requestDeserialize: deserialize_sale_CustomerId,
    responseSerialize: serialize_sale_OrderList,
    responseDeserialize: deserialize_sale_OrderList,
  },
  getOrder: {
    path: '/sale.OrderService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: sale_order_pb.OrderId,
    responseType: sale_order_pb.Order,
    requestSerialize: serialize_sale_OrderId,
    requestDeserialize: deserialize_sale_OrderId,
    responseSerialize: serialize_sale_Order,
    responseDeserialize: deserialize_sale_Order,
  },
  placeOrder: {
    path: '/sale.OrderService/PlaceOrder',
    requestStream: false,
    responseStream: true,
    requestType: sale_quote_pb.CustomerId,
    responseType: sale_order_pb.ProcessStatus,
    requestSerialize: serialize_sale_CustomerId,
    requestDeserialize: deserialize_sale_CustomerId,
    responseSerialize: serialize_sale_ProcessStatus,
    responseDeserialize: deserialize_sale_ProcessStatus,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
