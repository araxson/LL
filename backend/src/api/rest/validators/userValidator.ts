import { body } from 'express-validator';

export const updateUserValidator = [
  body('email').optional().isEmail().withMessage('Please provide a valid email'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('name').optional().not().isEmpty().withMessage('Name is required')
];
