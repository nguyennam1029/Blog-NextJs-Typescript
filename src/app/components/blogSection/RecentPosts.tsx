import Image from "next/image";
import Link from "next/link";

const featuredPost = {
  img: "/images/Background.jpg",
  category: "Category",
  title:
    "Enhancing Team Collaboration with SaaS Products: A Game-Changer for Modern Workflows",
  date: "Aug 10",
  readTime: "10 min read",
};

const latestPosts = [
  {
    img: "/images/Background2.jpg",
    title: "Tips for designing clear and user-friendly navigation menus.",
    date: "Aug 10",
    readTime: "10 min read",
  },
  {
    img: "/images/kaapkokaro.jpg",
    title: "Exploring how to establish a visual hierarchy that guides users.",
    date: "Aug 10",
    readTime: "10 min read",
  },
  {
    img: "/images/WorldTravel2.jpg",
    title: "How to use color to influence user emotions and actions.",
    date: "Aug 10",
    readTime: "10 min read",
  },
];

const BlogSection = () => (
  <div className="max-w-[1280px]">
    <div className="flex flex-col md:flex-row items-stretch">
      <div className="md:w-2/3 py-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={featuredPost.img}
            alt="Featured"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent w-full">
            <span className="text-white text-sm bg-orange-600 px-2 py-1 rounded">
              {featuredPost.category}
            </span>
            <h2 className="text-white text-xl mt-2">{featuredPost.title}</h2>
            <div className="text-gray-300 mt-1">
              {featuredPost.date} • {featuredPost.readTime}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 p-4">
        <h3 className="text-2xl font-semibold mb-4 text-text-base">
          Latest Posts
        </h3>
        <div className="space-y-4">
          {latestPosts.map((post, index) => (
            <div
              key={index}
              className="flex items-center shadow-md px-3 py-2 rounded-md"
            >
              <div className="w-40 h-20 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={post.img}
                  alt={`Post ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium">{post.title}</h4>
                <div className="text-gray-500 text-sm">
                  {post.date} • {post.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/blogs"
          className="animate-bounce w-fit mt-8 mx-auto flex items-center justify-between text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Choose plan
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default BlogSection;
