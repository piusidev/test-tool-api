import { object, string } from 'yup';

export const userSchema = object({
  id: string().required(),
  name: string().required(),
  email: string()
    .email()
    .required()
});
