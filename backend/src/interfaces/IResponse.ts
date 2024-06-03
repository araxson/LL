import { Response } from 'express';

export interface IResponse extends Response {
  sendError?: (message: string, statusCode?: number) => void;
}
