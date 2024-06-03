import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

const requestLogger = morgan('combined');

export default requestLogger;
