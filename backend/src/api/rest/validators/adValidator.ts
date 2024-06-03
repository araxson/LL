import { body } from 'express-validator';

export const createAdValidator = [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
  body('userId').not().isEmpty().withMessage('User ID is required')
];

export const updateAdValidator = [
  body('title').optional().not().isEmpty().withMessage('Title is required'),
  body('description').optional().not().isEmpty().withMessage('Description is required'),
  body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
];
