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
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        {/* Topbar */}
        <Topbar />

        {/* Navbar */}
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex grow justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl px-1 pb-40 pt-5 font-montserrat font-bold sm:px-20 sm:pt-12">
          <div className="px-3 pb-[20px] text-center text-2xl uppercase text-black sm:text-4xl">
            <h1>Paket Umroh</h1>
          </div>
          <div className="mb-3 flex flex-row justify-between text-xs sm:text-base">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="relative inline-flex h-8 items-center rounded bg-blue-500 px-3 text-white"
              >
                <Button
                  className="border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-700 hover:text-white"
                  variant="outline"
                >
                  Urutkan
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="absolute left-0 mt-2 w-56 rounded border bg-white shadow-lg"
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
            <span className="ml-3 flex flex-nowrap items-center justify-end gap-1 text-wrap text-right font-medium text-black">
              <p className="text-wrap">Cek jadwal umroh lebih lengkap</p>
              <Button asChild className="h-8 bg-red-600 px-3 hover:bg-red-700">
                <Link href="/jadwal">di sini</Link>
              </Button>
            </span>
          </div>
          <div className="flex grow flex-wrap px-3">
            <p className="text-xs font-medium text-gray-500 sm:text-sm">
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
