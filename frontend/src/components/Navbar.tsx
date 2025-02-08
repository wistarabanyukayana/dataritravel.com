import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white bg-white px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-start">
        <Link href="/" className="flex h-[50px] w-[200px] items-center">
          <Image
            src="/images/logo.png"
            alt="Datari Tour and Travel"
            width={464}
            height={112}
            placeholder="blur"
            blurDataURL="/images/logo.png"
            //priority={true}, commented because of a bug in Next.js. Replaced by placeholder and blurDataURL. See issue #44556
          />
        </Link>
      </div>
    </nav>
  );
}
