import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService';
import { Container } from 'typedi';

const userServiceInstance = Container.get(UserService);

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await userServiceInstance.getUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Invalid authentication token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authentication token' });
  }
};
