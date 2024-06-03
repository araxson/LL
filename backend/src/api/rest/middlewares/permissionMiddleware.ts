import { Request, Response, NextFunction } from 'express';

const permissionMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user || user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  };
};

export default permissionMiddleware;
