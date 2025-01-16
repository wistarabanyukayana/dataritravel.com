import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-black px-8 py-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-sm text-white sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-4 sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 font-['Montserrat'] sm:gap-4">
          <Link
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="Phone Number"
          >
            <span className="text-xs">088222122250</span>
          </Link>
            <span className="hidden min-[307px]:inline-block">|</span>
            <Link
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <span className="text-xs">layanan@dataritravel.com</span>
          </Link>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
