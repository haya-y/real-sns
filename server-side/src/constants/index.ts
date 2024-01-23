import 'dotenv/config';

/** MongoDBのURL */
export const MONGO_URL = process.env.MONGO_URL || '';

// クライアント側の開発環境用URL
export const DEV_CLIENT_SIDE_BASE_URL = process.env.DEV_CLIENT_SIDE_BASE_URL || '';

// クライアント側の本番環境用URL
export const PROD_CLIENT_SIDE_BASE_URL = process.env.PROD_CLIENT_SIDE_BASE_URL || '';
