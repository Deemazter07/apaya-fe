import Image from "next/image";
import React from "react";

export default function Jumbotron() {
  return (
    <section className="relative bg-gray-500 h-full">
      <Image
        src="/images/jumbotron.jpg" // Replace with the path to your image
        layout="fill"
        objectFit="cover"
        alt="Jumbotron Background"
        sizes="100"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-72 relative z-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Cari ApaYa?
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Portal Pengetahuan yang Mengajak Anda untuk Menjelajahi dan Belajar
          melalui Artikel-artikel Pilihan Terbaik
        </p>
      </div>
    </section>
  );

  // return (
  //   <section
  //     className="bg-center bg-no-repeat bg-gray-500 bg-blend-multiply h-full"
  //     style={{
  //       backgroundImage: 'url("/images/jumbotron.jpg")',
  //       backgroundSize: "cover",
  //     }}
  //   >
  //     <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-72">
  //       <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
  //         Selamat Datang di ApaYa
  //       </h1>
  //       <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
  //         Portal Pengetahuan yang Mengajak Anda untuk Menjelajahi dan Belajar
  //         melalui Artikel-artikel Pilihan Terbaik
  //       </p>
  //     </div>
  //   </section>
  // );
}
