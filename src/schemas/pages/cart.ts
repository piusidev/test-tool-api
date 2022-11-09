import { object, string } from 'yup';
import { itemsSchema } from '../common/items.js';

export const cartPageSchema = object({
  page: string().matches(/cart/).required(),
  id: string(),
  items: itemsSchema
});
