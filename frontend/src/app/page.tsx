"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [position, setPosition] = useState("soonest");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        {/* Topbar */}
        <Topbar />

        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="grow flex justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl pt-5 pb-40 px-1 font-montserrat font-bold sm:pt-12 sm:px-20">
          <div className="uppercase text-center text-black text-2xl sm:text-4xl pb-[20px] px-3 ">
            <h1>Paket Umroh</h1>
          </div>
          <div className="flex flex-row justify-between mb-3 text-xs sm:text-base">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="relative inline-flex items-center h-8 px-3 bg-blue-500 text-white rounded"
              >
                <Button
                  className="bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-600 hover:text-white"
                  variant="outline"
                >
                  Urutkan
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded"
                align="start"
                side="bottom"
              >
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="soonest">
                    Keberangkatan Terdekat
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cheapest">
                    Termurah
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="mostExpensive">
                    Termahal
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="flex flex-nowrap ml-3 justify-end items-center text-black text-right text-wrap font-medium gap-1">
              <p className="text-wrap">Cek jadwal umroh lebih lengkap</p>
              <Button asChild className="h-8 px-3 bg-red-600 hover:bg-red-700">
                <Link href="/jadwal">di sini</Link>
              </Button>
            </span>
          </div>
          <div className="grow flex flex-wrap px-3">
            <p className="font-medium text-gray-500 text-xs sm:text-sm">
              Tidak ada paket untuk saat ini.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
