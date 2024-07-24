import Link from "next/link";

import Banner from "./components/banner/banner";
import { ModeToggle } from "./components/mode-toggle";
import PopularItem from "./components/popular/popular-item";
import productApiRequest from "./apiRequests/product";
import RecentPosts from "./components/blogSection/RecentPosts";
import Search from "./components/nav/search";
import CategoriesPosts from "./components/blogSection/CategoriesPosts";

async function Home() {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;

  return (
    <>
      <main>
        <Banner />
        <div className="max-w-[1280px] my-4 mt-16 mx-auto">
          <div>
            <RecentPosts />
            <CategoriesPosts />
            {/* <Search /> */}
            {/* <div className="flex items-center justify-between">
              <h1 className="text-[#05073C] text-2xl font-bold mb-11">
                Find Popular Tours22
              </h1>
              <Link href="" className="text-[#05073C] text-sm">
                See all
              </Link>
            </div> */}
            {/* <div className="grid grid-cols-4 gap-4">
              {productList &&
                productList.map((item) => {
                  return <PopularItem key={item.id} data={item} />;
                })}
            </div> */}
          </div>

          {/* <PopularList productList = {data}/> */}
        </div>
      </main>
      <ModeToggle />
    </>
  );
}
export default Home;
