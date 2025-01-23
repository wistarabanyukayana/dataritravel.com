import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b px-4 py-2">
      <div className="mx-auto flex max-w-7xl justify-center items-center sm:justify-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Datari Tour and Travel"
            className="w-[200px] h-[50px]"
            width={200}
            height={50}
            priority
          />
        </Link>
      </div>
    </nav>
  );
}
