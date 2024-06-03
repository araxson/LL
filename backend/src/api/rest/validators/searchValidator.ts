import { body } from 'express-validator';

export const createSearchValidator = [
  body('query').not().isEmpty().withMessage('Query is required'),
  body('userId').not().isEmpty().withMessage('User ID is required'),
  body('results').isArray().withMessage('Results must be an array')
];

export const updateSearchValidator = [
  body('query').optional().not().isEmpty().withMessage('Query is required'),
  body('results').optional().isArray().withMessage('Results must be an array')
];
