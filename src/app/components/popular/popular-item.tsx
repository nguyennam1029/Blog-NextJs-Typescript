import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductResType } from "@/schemaValidations/product.schema";

export default function PopularItem(props: ProductResType) {
  const { data } = props;

  return (
    <Link
      href={`/blog/${data.id}`}
      className="bg-white rounded-xl shadow-md p-3 border border-neutral-200 block"
    >
      <div className="relative">
        <div className=" overflow-hidden h-[198px] object-cover rounded-lg">
          <Image
            src={data.image}
            alt="monkey-blogging"
            width={278}
            height={198}
            className="w-full object-cover"
          ></Image>
        </div>

        <Avatar className="absolute -bottom-4 right-3 w-9 h-9 border-2 border-zinc-300">
          <AvatarImage
            src="/images/user.jpg"
            className="object-cover"
            alt="ND"
          />
          <AvatarFallback>ND</AvatarFallback>
        </Avatar>
      </div>

      <div className="px-4 pt-3">
        <p className="mb-1 ml-4 text-[#717171] text-xs font-semibold">
          {data.title}
        </p>
        <h3 className="text-lg text-[#05073C] font-semibold ">
          Centipede Tour - Guided Arizona Desert Tour by ATV
        </h3>
        <p className="text-base my-1 text-[#05073C] text-center">4.8 (243)</p>

        <div className="flex items-center justify-between mt-4 border-t border-neutral-300 pt-4">
          <span className="text-[#05073C] text-xs font-semibold">
            April 07 2023
          </span>
          <div className="h-[16px] w-[1px] bg-neutral-400"></div>
          <span className="text-[#05073C] text-xs font-semibold">
            By Emily Johnson
          </span>
        </div>
      </div>
    </Link>
  );
}
