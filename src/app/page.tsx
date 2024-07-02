"use client";
import { useEffect, useState } from "react";

export default function Home() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-7 px-20">

        <p className="font-extrabold text-4xl text-center">Antri.</p>
      </header>

      <div className="mx-48 my-auto">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-3xl text-center">
            PPDB SMK Negeri 1 Bikini Bottom
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl">
              {date.toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </p>
            <p className="font-semibold text-6xl">
              {date.toTimeString().slice(0, 8)}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-10 mt-10">
          <div className="bg-red-500 rounded-lg py-20 px-10 basis-1/3">
            <div className="flex flex-col items-center gap-8">
              <p className="text-3xl font-bold text-center">Nomor Antrian Sebelumnya</p>
              <span className="text-9xl font-bold ">10</span>
            </div>
          </div>
          <div className="bg-green-500 rounded-lg py-20 px-10 basis-1/3">
            <div className="flex flex-col items-center gap-8">
              <p className="text-3xl font-bold text-center">Nomor Antrian Saat Ini</p>
              <span className="text-9xl font-bold ">11</span>
            </div>
          </div>
          <div className="bg-orange rounded-lg py-20 px-10 basis-1/3">
            <div className="flex flex-col items-center gap-8">
              <p className="text-3xl font-bold text-center">Nomor Antrian Berikutnya</p>
              <span className="text-9xl font-bold ">12</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <button className="w-32 h-12 font-bold bg-blue-300 rounded-md shadow-md hover:bg-blue-400 active:bg-blue-400 active:shadow-none active:translate-y-0.5 transition duration-100">
            Next
          </button>
        </div>
      </div>

      <footer className="text-center mt-auto py-5">
        Copyright &copy;{date.getFullYear()} Antri.
      </footer>
    </div>
  );
}
