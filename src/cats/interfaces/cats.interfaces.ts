import { z } from 'zod';




export interface Cat {
    name: string;
    age: number;
    breed: string;
  }




export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;