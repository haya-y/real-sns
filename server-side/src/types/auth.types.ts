import { UserSchema } from './user.types';

export type RegisterUserRequestBody = Pick<UserSchema, 'username' | 'email' | 'password'>;

export type LoginUserRequestBody = Pick<UserSchema, 'email' | 'password'>;
