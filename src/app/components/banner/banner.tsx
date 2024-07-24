import Image from "next/image";
import { CarouselSpacing } from "./carousel";

export default function Banner() {
  return (
    <div className="max-h-calc-screen-minus-menu h-banner animated-background relative overflow-hidden z-10">
      <div className="relative z-10 ">
        <div className="pt-12">
          <div className="relative  m-auto flex items-center justify-center w-fit gap-3 py-1 px-3 bg-white shadow-md rounded-full">
            <Image
              src="/images/user.jpg"
              width={60}
              height={60}
              alt="avatar"
              quality={100}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="font-bold text-gray-900 text-sm">Nguyễn Văn Nam</h2>
            <span className="absolute inline-flex top-2/4 -right-1 -translate-y-2/4 animate-ping rounded-full h-2 w-2 bg-sky-500"></span>
          </div>
        </div>

        <h3 className="text-center mt-8 mb-6 mx-auto font-bold text-3xl text-gray-900 max-w-[440px]">
          Explore the World Through My Lens Journey
        </h3>
        <CarouselSpacing />
      </div>

      <Image
        src="/images/clipPathBanner.svg"
        width={1200}
        height={800}
        alt="path"
        className="absolute top-0 left-0 z-0"
      />
    </div>
  );
}
