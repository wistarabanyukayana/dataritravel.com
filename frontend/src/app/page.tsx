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
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow flex justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl pt-12 pb-40 font-montserrat font-bold">
          <div className="uppercase text-center text-black text-4xl pt-[60px] pb-[20px] px-3 sm:pt-[10px] ">
            <h1>Paket Umroh</h1>
          </div>
          <div className="flex flex-row justify-between mb-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="relative inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded"
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
            <p className="text-black font-medium">
              Cek jadwal umroh lebih lengkap{" "}
              <Button asChild className="bg-red-600 hover:bg-red-700 px-3">
                <Link href="/jadwal">di sini</Link>
              </Button>
            </p>
          </div>
          <div className="grow flex flex-wrap px-3">
            <p className="font-medium text-gray-500 text-sm">
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
