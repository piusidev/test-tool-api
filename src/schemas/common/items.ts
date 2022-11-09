import { array, object, string, number } from 'yup';

export const itemsSchema = array().of(
  object({
    pid: string().required(),
    sku: string(),
    price: number(),
    quantity: number().required()
  })).min(1);
