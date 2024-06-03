import { body } from 'express-validator';

export const registerValidator = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('name').not().isEmpty().withMessage('Name is required')
];

export const loginValidator = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').not().isEmpty().withMessage('Password is required')
];
