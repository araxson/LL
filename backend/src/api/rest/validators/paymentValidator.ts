import { body } from 'express-validator';

export const createPaymentValidator = [
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
  body('userId').not().isEmpty().withMessage('User ID is required'),
  body('status').not().isEmpty().withMessage('Status is required')
];

export const updatePaymentValidator = [
  body('amount').optional().isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
  body('status').optional().not().isEmpty().withMessage('Status is required')
];
