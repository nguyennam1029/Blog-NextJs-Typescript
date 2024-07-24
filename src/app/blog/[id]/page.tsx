import productApiRequest from "@/app/apiRequests/product";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CornerDownLeft,
  Mic,
  Paperclip,
  CornerDownRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Image from "next/image";
import CommentCard from "../_components/CommentCard";
import { ProductResType } from "@/schemaValidations/product.schema";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function ProductDetail({ params, searchParams }: Props) {
  let product: ProductResType["data"] | null = null;

  try {
    const { payload } = await productApiRequest.getDetail(Number(params.id));
    product = payload.data;
  } catch (error) {
    console.log("🚀 ~ ProductDetail ~ error:", error);
  }
  const formattedCreatedAt =
    product && product.createdAt instanceof Date
      ? new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(product.createdAt)
      : product?.createdAt || "2nd January, 2024";

  return (
    <div className="w-full max-w-4xl mx-auto my-14">
      <h1 className="text-3xl text-text-base font-bold">
        {product && product?.title}
      </h1>
      <div className="flex items-center gap-5 mt-10">
        <Avatar className="hidden h-10 w-10 sm:flex">
          <AvatarImage
            src="/images/user.jpg"
            alt="Avatar"
            className="object-cover"
          />
          <AvatarFallback>OMs</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            {product && product?.authorData?.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {product && product?.authorData?.email}
          </p>
        </div>
        <p className="border-l border-gray-500 pl-5">{formattedCreatedAt}</p>
      </div>
      <div className="my-10">
        <Image
          src={product?.image || "/images/Background.jpg"}
          width={900}
          height={500}
          alt="Image"
          className="w-full max-w-4xl object-cover rounded-lg overflow-hidden shadow-lg mb-10"
        />
        <div className="text-lg text-text-base leading-8 text-justify">
          <div
            className="mt-4 space-y-3"
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />

          {/* <p className="mt-4">
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not!
          </p>
          <p className="mt-4">
            In this article, I have included a whole load of blog examples from
            a wide variety of different niches, all run on different blogging
            platforms like WordPress, Joomla! and Drupal.
          </p>
          <p className="mt-4">
            Since the beginning of the internet, millions and millions and
            millions of blogs have been created. Many have died due to lost
            interest or their owners giving up on the idea, while others have
            thrived and continue to grow, making money and earning their owners
            a steady income.
          </p>
          <p className="mt-4">
            It’s a constant evolution of content that keeps people coming back
            for more, especially if these blogs contact highly resourceful
            material that people find useful and interesting.
          </p>
          <p className="mt-4">
            Each example listed in this blog post are all different in some way
            and all bring something unique to their readers & subscribers. I
            want to show you what is possible and how you can take inspiration
            from them and create an awesome blog of your own. Some of these
            blogs make over $100k a month, others are just a hobby for their
            owners, but all have the same purpose at their core… the love of
            writing and sharing information.
          </p>
          <p className="mt-4">
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and Some of these blogs make over $100k a month,
            others are just a hobby for their owners, but all have the same
            purpose at their core… the love of writing and sharing information.
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and sharing information.
          </p> */}
        </div>
        <p className="text-lg font-bold text-text-base my-8">
          Join the conversation
        </p>
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          <div>
            <div className="relative flex items-center gap-5 mt-10 mb-4">
              <Avatar className="hidden h-10 w-10 sm:flex">
                <AvatarImage
                  src="/images/user.jpg"
                  alt="Avatar"
                  className="object-cover"
                />
                <AvatarFallback>OMs</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-sm text-muted-foreground">
                  olivia.martin@email.com
                </p>
              </div>
              <div className="absolute left-4 -bottom-7 text-gray-700">
                <CornerDownRight />
              </div>
            </div>
            <form
              className="relative ml-16 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 py-8 mt-8 border-t border-gray-500 relative">
            <div className="relative z-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <CommentCard key={index} />
              ))}

              <button
                type="button"
                className="mt-6 mx-auto block  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Load More
              </button>
            </div>
            <img
              src="/images/Capa1.svg"
              alt=""
              className="absolute top-1/3 z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
