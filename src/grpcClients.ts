import { ProductInfoClient } from '../generated/product_grpc_pb';
import { QuoteServiceClient } from '../generated/sale/quote_grpc_pb';
import { OrderServiceClient } from '../generated/sale/order_grpc_pb';
import { credentials } from '@grpc/grpc-js';

import env from './config';


export const productStub = new ProductInfoClient(env.CATALOG_GRPC_SERVER, credentials.createInsecure());
export const quoteStub = new QuoteServiceClient(env.QUOTE_GRPC_SERVER, credentials.createInsecure());
export const orderStub = new OrderServiceClient(env.QUOTE_GRPC_SERVER, credentials.createInsecure());
