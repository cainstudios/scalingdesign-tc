"use client";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="Card w-72 h-96 bg-gradient-to-r from-sky-950 via-blue-950 to-sky-950 rounded-3xl shadow border-2 border-white border-opacity-50 backdrop-blur-2xl flex-col justify-start items-start inline-flex">
      <Image
        className="Rectangle1 self-stretch h-64 rounded-tl-3xl rounded-tr-3xl"
        src="https://via.placeholder.com/290x259"
        alt={""}
        height={500}
        width={500}
      />
      <div className="Frame1 self-stretch h-52 p-4 flex-col justify-start items-start gap-4 flex">
        <div className="Category self-stretch text-gray-200 text-base font-normal font-['D-DIN'] leading-tight">
          CATEGORY1
        </div>
        <div className="Frame2 self-stretch h-36 shadow flex-col justify-start items-start gap-1 flex">
          <div className="InterstellarHoneymoonsLoveInTheCosmos self-stretch text-gray-200 text-2xl font-bold font-['D-DIN'] leading-7">
            Interstellar Honeymoons: Love in the Cosmos CATEGORY
          </div>
          <div className="LoveKnowsNoBoundsDiscoverHowCouplesAreCelebratingTheirLoveWithRomanticInterstellarHoneymoonsAmongTheStars self-stretch text-gray-200 text-base font-normal font-['D-DIN'] leading-tight">
            Love knows no bounds! Discover how couples are celebrating their
            love with romantic interstellar honeymoons among the stars.
          </div>
        </div>
      </div>
    </div>
  );
}
