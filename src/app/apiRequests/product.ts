import http from '@/lib/http'
import { MessageResType } from '@/schemaValidations/post.schema';
// import { MessageResType } from '@/schemaValidations/common.schema'
import {
 
  ProductListResType,
  ProductResType,

} from '@/schemaValidations/product.schema'

const productApiRequest = {

 getList: (
    limit?: number | string,
    currentPage?: number,
    title?: any,
    category?: any,
    author?: any,
    status?: any
  ) => {
    const queryParams = {
      limit: limit || "",
      page: currentPage || 1,
      title: title || "",
      category: category || "",
      author: author || "",
      status: status || "",
    };

    const filteredParams = Object.entries(queryParams)
      .filter(([_, value]) => value !== undefined && value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    return http.get<ProductListResType>(`/post?${filteredParams}`, {
      cache: 'no-cache'
    });
  },
  getDetail: (id: number) =>
    http.get<ProductResType>(`/post/detail?id=${id}`, {
      cache: 'no-store'
    }),
//   create: (body: CreateProductBodyType) =>
//     http.post<ProductResType>('/products', body),
//   update: (id: number, body: UpdateProductBodyType) =>
//     http.put<ProductResType>(`/products/${id}`, body),
//   uploadImage: (body: FormData) =>
//     http.post<{
//       message: string
//       data: string
//     }>('/media/upload', body),
    delete: (id: number) => http.delete<MessageResType>(`/post?id=${id}`)

}

export default productApiRequest