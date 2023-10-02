"use client";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.kindacode.com/wp-content/uploads/2022/05/green.jpeg)",
      }}
      className={` w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5 `}
    >
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className="w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg"
      >
        <div className="w-full mb-3 pb-3 border-b border-1 border-white">
          <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
        </div>

        <div>
          <Image
            src="https://i.postimg.cc/SxLx0fHV/bg01.jpg"
            alt="image1"
            className="w-full h-48 object-cover mb-2"
            height={500}
            width={500}
          />
          <p className="mb-3 tracking-wide text-base text-shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
          <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
            Detail
          </button>
        </div>
      </div>
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className={`w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg`}
      >
        {/* <!-- header --> */}
        <div className="w-full mb-3 pb-3 border-b border-1 border-white">
          <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
        </div>
        {/* <!-- body --> */}
        <div>
          <Image
            src="https://i.postimg.cc/J4khxLqf/bg02.jpg"
            alt="image2"
            className="w-full h-48 object-cover mb-2"
            height={500}
            width={500}
          />
          <p className="mb-3 tracking-wide text-base text-shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
          <button
            style={{ backdropFilter: "blur(10px)" }}
            className={`bg-white bg-opacity-0 border border-white   px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg hover:bg-gradient-to-br from-red-500 to-orange-500 active:bg-gradient-to-br from-red-500 to-orange-500`}
          >
            Detail
          </button>
        </div>
      </div>
      <div
        dir="ltr"
        // style={{
        //   backdropFilter: "blur(10px)",
        // }}
        className={`backdrop-blur-sm backdrop-brightness-90 hover:backdrop-blur-lg hover:backdrop-brightness-100 w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-s-white/[.20] border-t-indigo-500/[.55] shadow-lg`}
      >
        {/* <!-- header --> */}
        <div className="w-full mb-3 pb-3 border-b border-1 border-white">
          <h3 className="text-xl font-semibold text-shadow">1Something Good</h3>
        </div>
        {/* <!-- body --> */}
        <div>
          <Image
            src="https://i.postimg.cc/VNYLzb8w/bg03.jpg"
            alt="image3"
            className="w-full h-48 object-cover mb-2"
            height={500}
            width={500}
          />
          <p className="mb-3 tracking-wide text-base text-shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
          <button
            style={{ backdropFilter: "blur(10px)" }}
            className={`bg-white bg-opacity-0 border border-white   px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg hover:bg-gradient-to-br from-red-500 to-orange-500 active:bg-gradient-to-br from-red-500 to-orange-500`}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
