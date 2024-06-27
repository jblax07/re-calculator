import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any; // Adjust the type according to your user model
  }
}
