import { body } from 'express-validator';

export const createAdminValidator = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('name').not().isEmpty().withMessage('Name is required'),
  body('role').not().isEmpty().withMessage('Role is required')
];

export const updateAdminValidator = [
  body('email').optional().isEmail().withMessage('Please provide a valid email'),
  body('name').optional().not().isEmpty().withMessage('Name is required'),
  body('role').optional().not().isEmpty().withMessage('Role is required')
];
