import { array, object, string } from 'yup';

export const categoryPageSchema = object({
  page: string().matches(/category/).required(),
  items: array()
    .of(string())
    .min(1)
    .max(1)
    .required()
});
