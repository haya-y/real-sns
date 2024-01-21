"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROD_CLIENT_SIDE_BASE_URL = exports.DEV_CLIENT_SIDE_BASE_URL = exports.MONGO_URL = void 0;
require("dotenv/config");
/** MongoDBのURL */
exports.MONGO_URL = process.env.MONGO_URL || '';
// クライアント側の開発環境用URL
exports.DEV_CLIENT_SIDE_BASE_URL = process.env.DEV_CLIENT_SIDE_BASE_URL || '';
// クライアント側の本番環境用URL
exports.PROD_CLIENT_SIDE_BASE_URL = process.env.PROD_CLIENT_SIDE_BASE_URL || '';
