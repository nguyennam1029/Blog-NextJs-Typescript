import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

export default function CommentCard() {
  return (
    <div className="p-4 rounded-lg shadow-md border border-gray-200 mb-6 z-10 bg-white">
      <div className="flex items-center gap-5">
        <Avatar className="hidden h-10 w-10 sm:flex">
          <AvatarImage
            src="/images/user.jpg"
            alt="Avatar"
            className="object-cover"
          />
          <AvatarFallback>OMs</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
        </div>
        <p className="border-l border-gray-500 text-gray-600 pl-5">5 min ago</p>
      </div>
      <p className="leading-7 text-text-base mt-4">
        I really appreciate the insights and perspective shared in this article.
        It is definitely given me something to think about and has helped me see
        things from a different angle. Thank you for writing and sharing!
      </p>
      <div className="flex items-center gap-5 mt-6">
        <div className="flex items-center gap-3">
          <ThumbsUp size={16} />

          <span className="text-sm font-medium">284</span>
        </div>
        <div className="flex items-center gap-3">
          <ThumbsDown size={16} />

          <span className="text-sm font-medium">0</span>
        </div>
      </div>
    </div>
  );
}
