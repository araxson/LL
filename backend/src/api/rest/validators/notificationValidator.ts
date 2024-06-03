import { body } from 'express-validator';

export const createNotificationValidator = [
  body('message').not().isEmpty().withMessage('Message is required'),
  body('userId').not().isEmpty().withMessage('User ID is required')
];

export const updateNotificationValidator = [
  body('message').optional().not().isEmpty().withMessage('Message is required'),
  body('read').optional().isBoolean().withMessage('Read must be a boolean')
];
