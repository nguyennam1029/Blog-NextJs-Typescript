"use client";

import { ProductListResType } from "@/schemaValidations/post.schema";
import accountApiRequest from "../apiRequests/account";
import { useEffect, useState } from "react";
import { handleErrorApi } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { BookHeart, Edit3, Table, Tag } from "lucide-react";
import Header from "./_components/header";
import { UserPostsResType } from "@/schemaValidations/account.schema";
import DeleteProduct from "./post/_components/deleteProduct";

export default function MeProfile() {
  const [userPosts, setUserPosts] = useState<UserPostsResType["data"] | null>(
    null
  );
  const [userInfo, setUserInfo] = useState<
    UserPostsResType["data"][0]["authorData"] | null
  >(null);

  const [postCount, setPostCount] = useState<number>(0);
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const { payload } = await accountApiRequest.getUserPosts();

        setUserPosts(payload?.data);
        if (payload?.data && payload.data.length > 0) {
          setUserInfo({
            name: payload.data[0].authorData.name,
            email: payload.data[0].authorData.email,
          });
          setPostCount(payload.count);
        }
      } catch (error) {
        console.log("🚀 ~ fetchRequest ~ error:", error);
        handleErrorApi({
          error,
        });
      }
    };
    fetchRequest();
  }, [userPosts]);
  return (
    <div className="max-w-5xl mx-auto p-4 min-h-screen">
      <Header
        count={postCount}
        name={userInfo?.name || ""}
        email={userInfo?.email || ""}
      />
      <div className="border-t border-t-gray-300 mt-14"></div>
      <div className="flex items-center justify-center gap-14">
        <Link
          href=""
          className="flex items-center gap-1 font-medium text-xs text-[#737373] py-3"
        >
          <Table className="w-3 h-3" />
          POSTS
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 font-medium text-xs text-[#737373] py-3"
        >
          <BookHeart className="w-3 h-3" />
          SAVED
        </Link>
        <Link
          href=""
          className="flex items-center gap-1 font-medium text-xs text-[#737373] py-3"
        >
          <Tag className="w-3 h-3" />
          TAGGED
        </Link>
      </div>
      <section className="mb-10">
        <div className="grid grid-cols-3 mt-5 gap-5">
          {userPosts &&
            userPosts.map((item) => (
              <div
                key={item?.id}
                className="relative rounded-lg overflow-hidden group"
              >
                <Link href={`blog/${item?.id}`} className="block h-[308px]">
                  <Image
                    src={item?.image}
                    alt="test"
                    width={408}
                    height={408}
                    quality={100}
                    className="w-full h-full object-cover overflow-hidden rounded-lg"
                  ></Image>
                </Link>
                <div className="absolute top-1 right-1 opacity-0 p-4  transition-opacity  group-hover:opacity-100">
                  <Link
                    href={`me/post/edit/${item?.id}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full  mb-3"
                  >
                    <Edit3 className="text-white  p-1" />
                  </Link>
                  <div className=" flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full ">
                    <DeleteProduct productId={item.id} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
