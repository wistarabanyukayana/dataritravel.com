import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Datari Tour and Travel"
            className="h-[50px] w-[200px]"
            width={200}
            height={50}
            priority={true}
          />
        </Link>
      </div>
    </nav>
  );
}
