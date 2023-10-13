import Image from "next/image";
import React from "react";

export default function ArticleCard({
  title,
  description,
  image,
  date,
  classes,
}) {
  return (
    <div
      className={`bg-white cursor-pointer border border-gray-200 shadow-2xl custom-card flex flex-col justify-between transform transition duration-500 hover:-translate-y-4 hover:shadow ${classes}`}
    >
      <div>
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      <div className="p-6 shadow-lg font-PlayfairDisplay bg-white w-full -ml-4 -mb-4 z-10">
        <p className="font-normal text-gray-400 text-sm">{date}</p>
        <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className={`bg-white cursor-pointer border border-gray-200 shadow-2xl custom-card flex flex-col justify-between transform transition duration-500 hover:-translate-y-4 hover:shadow ${classes}`}
  //     style={{
  //       backgroundImage: image,
  //       backgroundSize: "cover",
  //     }}
  //   >
  //     <div></div>
  //     <div className="p-6 shadow-lg font-PlayfairDisplay bg-white w-full -ml-4 -mb-4">
  //       <p className="font-normal text-gray-400 text-sm">{date}</p>
  //       <h5 className="mb-3 text-lg font-semibold  tracking-tight text-gray-900">
  //         {title}
  //       </h5>
  //       <p className="font-normal text-gray-500 text-sm">{description}</p>
  //     </div>
  //   </div>
  // );
}
