import z from 'zod';

export const CreateProductBody = z.object({
  name: z.string().min(1).max(256),
  price: z.number().positive(),
  description: z.string().max(10000),
  image: z.string().url()
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>

export const CategoriesSchema = z.object({
  id: z.number(),
  code: z.string(),
  value: z.string(),
});


export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  short_description: z.string().min(1, "Content is required"),

  status: z.string(),
  image: z.string(),
  createdAt:z.union([z.date(), z.string()]),
  updatedAt: z.date(),
  categoryData: CategoriesSchema,
  authorData: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
  }),
  statusData: z.object({
    id: z.number(),
    code: z.string(),
    value: z.string(),
  }),
});
export const ProductRes = z.object({
  data: ProductSchema,
 

})

export type ProductResType = z.TypeOf<typeof ProductRes>

export const ProductListRes = z.object({
  data: z.array(ProductSchema),
  mess: z.string(),
  err: z.number(),
  count: z.number(),
})

export type ProductListResType = z.TypeOf<typeof ProductListRes>

export const UpdateProductBody = CreateProductBody
export type UpdateProductBodyType = CreateProductBodyType
export const ProductParams = z.object({
  id: z.coerce.number()
})
export type ProductParamsType = z.TypeOf<typeof ProductParams>


const SearchParamsSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  author: z.string().optional(),
  status: z.string().optional(),
  page: z.number().optional(),
});

type SearchParams = z.infer<typeof SearchParamsSchema>;