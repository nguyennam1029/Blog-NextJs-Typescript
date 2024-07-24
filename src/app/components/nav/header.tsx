import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Search from "./search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, LifeBuoy, LogOut, Settings, User } from "lucide-react";
import ButtonLogout from "../button-logout";
import { cookies } from "next/headers";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  //   {
  //     url: "/me",
  //     title: "Profile",
  //   },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

export default function Header() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  return (
    <>
      <div className="shadow-md">
        <div className="flex items-center justify-between max-w-[1280px] m-auto py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="mr-3">
              <Image
                src="/images/logo.png"
                alt="monkey-blogging"
                width={150}
                height={32}
              ></Image>
            </Link>

            {/* <ButtonLogout /> */}
          </div>
          <ul className="flex items-center gap-6">
            <li className="p-3">
              <Link href="/" className="menu-link font-medium">
                Home
              </Link>
            </li>
            <li className="p-3">
              <Link href="/" className="menu-link font-medium">
                About
              </Link>
            </li>
            <li className="p-3">
              <Link href="/" className="menu-link font-medium">
                Article
              </Link>
            </li>
            <li className="p-3">
              <Link href="/blog" className="menu-link font-medium">
                Posts
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            {/* <Search /> */}
            {sessionToken ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />

                      <Link href="/me">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <Link href="/me/setting">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                    {/* <ButtonLogout></ButtonLogout> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button asChild variant={"secondary"}>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-[#2b2a29] text-white">
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
