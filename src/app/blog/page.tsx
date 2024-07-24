// import productApiRequest from "@/apiRequests/products";

import { ProductCard } from "@/app/components/ProductCard";
import { FilterBar } from "./_components/FilterBar";
import PaginationBlog from "./_components/pagination";
import Search from "../components/nav/search";
import productApiRequest from "@/apiRequests/products";
import Image from "next/image";

interface SearchParams {
  title?: string;
  category?: string;
  author?: string;
  status?: string;
  page?: number;
}
const caculatePagesCount = (pageSize: number, totalCount: number) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

export default async function page({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const title = searchParams?.title || "";
  const limit = 8 || process.env.NEXT_PUBLIC_LIMIT_PRODUCT;
  const currentPage = searchParams?.page ?? 1;
  const category = searchParams?.category || "";
  const author = searchParams?.author || "";
  const status = searchParams?.status || "";
  const { payload } = await productApiRequest.getList(
    limit,
    currentPage,
    title,
    category,
    author,
    status
  );

  const productList = payload?.data;
  const totalItem = payload?.count;
  const totalPages = caculatePagesCount(limit as number, totalItem);

  return (
    <div className="">
      <h1 className="text-3xl text-slate-900 font-bold mb-5">Blog posts</h1>
      <p className="text-lg text-[#6D7D8B] mb-14">
        Our latest updates and blogs about managing your team
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <FilterBar />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Search />
        </div>
      </div>
      {productList && productList.length > 0 ? (
        <>
          <div className="grid grid-cols-4 mt-14 gap-5">
            {productList &&
              productList.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
          </div>

          <PaginationBlog totalPages={totalPages} />
        </>
      ) : (
        <div className="m-auto my-10">
          <Image
            src="/images/DataNotFound.gif"
            width={400}
            height={300}
            alt="Data Not Found!"
            className="m-auto w-[400px] object-cover"
          />
        </div>
      )}
    </div>
  );
}
