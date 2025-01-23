import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export default function Topbar() {
  return (
    <div className="w-full bg-black px-8 py-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-sm text-white font-montserrat font-medium sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-4 sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a
              href="tel:88222122250"
              className="transition-opacity hover:opacity-80"
              aria-label="Phone Number"
            >
              <span className="text-xs">088222122250</span>
            </a>
            <span className="hidden min-[307px]:inline-block">|</span>
            <a
              href="mailto:layanan@dataritravel.com"
              className="transition-opacity hover:opacity-80"
              aria-label="E-Mail"
            >
              <span className="text-xs">layanan@dataritravel.com</span>
            </a>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://web.facebook.com/dataritravelindonesia"
            className="transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <SiFacebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/dataritravelindonesia/"
            className="transition-opacity hover:opacity-80"
            aria-label="Instagram"
          >
            <SiInstagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="transition-opacity hover:opacity-80"
            aria-label="YouTube"
          >
            <SiYoutube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
