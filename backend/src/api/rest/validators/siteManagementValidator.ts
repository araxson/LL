import { body } from 'express-validator';

export const updateSiteSettingsValidator = [
  body('siteName').optional().not().isEmpty().withMessage('Site name is required'),
  body('siteUrl').optional().isURL().withMessage('Please provide a valid URL'),
  body('contactEmail').optional().isEmail().withMessage('Please provide a valid email')
];
