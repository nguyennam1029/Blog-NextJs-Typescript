import Link from "next/link";
import { ProductCard } from "../ProductCard";
import { ArrowRight } from "lucide-react";
import productApiRequest from "@/apiRequests/products";

export default async function CategoriesPosts() {
  const limit = process.env.NEXT_PUBLIC_LIMIT_PRODUCT || 4;
  const category: string = "";
  const { payload } = await productApiRequest.getList(
    limit,
    undefined,
    undefined,
    category
  );
  const productList = payload?.data;

  return (
    <div className="mt-12">
      <h2 className="font-bold text-2xl text-text-base pb-4">Technology</h2>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {productList &&
          productList.map((item) => <ProductCard key={item.id} item={item} />)}
      </div>
      <Link
        href="/"
        className="flex items-center justify-end gap-2 animate-pulse mt-8  text-[#9a52d8] text-sm font-bold"
      >
        See More
        <ArrowRight />
      </Link>
    </div>
  );
}
