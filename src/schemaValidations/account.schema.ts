import { count } from 'console';
import z from 'zod';

export const AccountRes = z
  .object({
     err: z.number(),
    mes: z.string(),
    data: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
      avatar: z.string()
    }),
   
  })
  .strict()

export type AccountResType = z.TypeOf<typeof AccountRes>

export const UpdateMeBody = z.object({
  name: z.string().trim().min(2).max(256)
})

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>



export const UserPost = z.object({
  id: z.number(),
  image: z.string().url(),
  authorData: z.object({
    name: z.string(),
    email: z.string().email()
  })
});

export const UserPostsRes = z.object({
  err: z.number(),
  mes: z.string(),
  count: z.number(),
  data: z.array(UserPost)
});

export type UserPostsResType = z.infer<typeof UserPostsRes>;