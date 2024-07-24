"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  count: number;
  name: string;
  email: string;
}

export default function Header({ count, name, email }: HeaderProps) {
  return (
    <div className="flex items-center justify-center gap-24">
      <div className="relative">
        <Image
          className="rounded-full w-[150px] h-[150px] overflow-hidden object-cover"
          src="/images/user.jpg"
          alt="User Profile"
          width={150}
          height={150}
        />
        <div className="absolute top-0 left-0 bg-white rounded-full p-1">
          <span className="text-sm">Note...</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-10">
          <h2 className="mt-4 text-xl font-semibold">{name}</h2>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/me/editProfile"
              className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium"
            >
              Edit profile
            </Link>
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
              View archive
            </button>
          </div>
        </div>
        <div className="flex space-x-4 mt-2">
          <span>{count} post</span>
          <span>43 followers</span>
          <span>5 following</span>
        </div>

        <Link
          href="/me/post/add"
          className="mt-4 flex flex-col max-w-20 text-center text-sm font-medium gap-2"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#fff] border border-gray-400">
            <Plus className="text-[#c7c7c7]" />
          </div>
          New
        </Link>
      </div>
    </div>
  );
}
