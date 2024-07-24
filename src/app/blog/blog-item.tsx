"use client";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { ProductResType } from "@/schemaValidations/product.schema";

export default function BlogItem(props: ProductResType) {
  const { data } = props;

  return (
    <div className="flex gap-7 p-5 border-borders-base overflow-hidden border rounded-xl mb-8">
      <div className="relative w-[280px] h-[264px] flex-shrink-0 object-cover rounded-xl overflow-hidden">
        <Image
          width={280}
          height={264}
          alt="product"
          src={data?.image}
          className="w-full object-cover overflow-hidden"
        />
        <Avatar className="absolute -bottom-4 right-3 w-9 h-9 border-2 border-zinc-300">
          <AvatarImage
            src="/images/user.jpg"
            className="object-cover"
            alt="ND"
          />
          <AvatarFallback>ND</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <p className="text-text-base">{data?.categoryData?.value}</p>
        <h3 className="text-text-base text-lg mt-2 mb-3">{data?.title}</h3>
        <span className="text-center text-text-base font-medium">
          4.8 (269)
        </span>
        <p className="text-text-base mt-4 mb-8">{data?.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-text-primary">Best Price Guarantee</span>
          <span className="text-text-primary">Free Cancellation</span>
        </div>
      </div>
      <div className="pl-7 border-l border-borders-base w-56 text-center">
        <p className="text-text-base mb-24">2 Days 1 Nights</p>
        <span className="text-[#C6C6D2]">$1200</span>
        <div className=" flex items-center justify-center gap-1 mt-1 mb-8 text-base text-text-base font-medium">
          <p className="text-sm font-normal">From</p>
          {/* <p>$114</p> */}
        </div>
        <Button asChild>
          <Link
            href={`/blog/${data?.id}`}
            className="px-8 py-4 bg-white text-text-primary border-borders-primary border"
          >
            Detail
          </Link>
        </Button>
      </div>
    </div>
  );
}
