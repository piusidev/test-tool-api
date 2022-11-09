import { NextFunction, Request, Response } from 'express';

export const defaultMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    return res.status(400).json({
      message: 'Body is empty'
    });
  }

  const { apiKey, env } = req.body;

  if (!apiKey) {
    return res.status(400).json({
      message: 'Missing apiKey'
    });
  }

  if (!env) {
    return res.status(400).json({
      message: 'Missing env'
    });
  }

  return next();
};
