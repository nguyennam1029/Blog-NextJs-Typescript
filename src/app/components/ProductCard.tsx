import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductSchema } from "@/schemaValidations/product.schema";

import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

// Định nghĩa component ProductCard
interface ProductCardProps {
  item: z.infer<typeof ProductSchema>; // Sử dụng kiểu dữ liệu từ ProductSchema
}

export const ProductCard: React.FC<ProductCardProps> = async ({ item }) => {
  // export const ProductCard = async () => {
  return (
    <div
      key={item?.id}
      className=" rounded-lg overflow-hidden shadow-lg border border-gray-100"
    >
      <Link href={`blog/${item?.id}`}>
        <Image
          src={item?.image}
          alt="test"
          width={400}
          height={400}
          quality={100}
          className="w-full h-[200px] object-cover overflow-hidden rounded-t-lg"
        ></Image>
        <h2 className="text-base text-black font-bold p-3 pb-0 mb-3 line-clamp-2">
          {item?.title}
        </h2>
      </Link>
      <p className="text-sm text-[#25313C] px-3  line-clamp-2">
        {item?.short_description}
      </p>
      <div className="flex items-center justify-evenly gap-5 pt-4 pb-3 border-b border-b-gray-300">
        <div className="flex items-center gap-2">
          <Star className="h-3.5 w-3.5 text-yellow-500" />
          <span className="text-sm text-yellow-500 font-semibold">4.5</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="h-3.5 w-3.5 text-gray-800" />
          <span className="text-sm text-gray-800 font-semibold">7.899</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-1 p-3">
        <Avatar className="hidden h-10 w-10 sm:flex">
          <AvatarImage
            src="/images/user.jpg"
            alt="Avatar"
            className="object-cover"
          />
          <AvatarFallback>UT</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            {item?.authorData?.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {item?.authorData?.email}
          </p>
        </div>
      </div>
    </div>
  );
};
