import { Mail, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 px-8 py-8 sm:px-20 sm:py-20">
      <div className="font-montserrat mx-auto flex max-w-7xl flex-col items-center justify-center text-center text-xs font-medium text-white sm:justify-between sm:text-start">
        <div className="flex w-full flex-row flex-wrap justify-center gap-7 sm:flex-nowrap sm:justify-between sm:gap-4">
          <div className="w-auto">
            <div className="mb-[15px] font-semibold text-yellow-400 uppercase">
              Tentang Kami
            </div>
            <p className="m-0">
              PT. Dallas Wisata Mandiri berupaya untuk selalu meningkatkan
              kualitas pelayanan dengan menghadirkan berbagai fasilitas dan
              program yang sesuai dengan kebutuhan jamaah. Kami berharap dapat
              terus menjadi bagian dari perjalanan spiritual Anda dan
              bersama-sama meraih ridha Allah SWT.
            </p>
          </div>
          <div className="w-auto">
            <div className="mb-[15px] font-semibold text-yellow-400 uppercase">
              Kunjungi Kami
            </div>
            <p className="m-0">
              Jl. Raya Kalibata No.25, RT.11/RW.5, Cawang, Kec. Kramat Jati,
              Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, Indonesia,
              13630
              <br />
              <br />
              <a
                className="transition-opacity hover:opacity-80"
                href="https://g.co/kgs/gaJF2zi"
              >
                Lihat Di Maps
              </a>
            </p>
          </div>
          <div className="w-fit text-nowrap">
            <div className="mb-[15px] font-semibold text-yellow-400 uppercase">
              Hubungi Kami
            </div>
            <p className="m-0 mb-10">
              <a
                className="transition-opacity hover:opacity-80"
                href="https://wa.me/6288222122250"
              >
                <SiWhatsapp className="inline-block h-3 w-3" /> Whatsapp.
                088222122250
              </a>
              <br />

              <a
                className="transition-opacity hover:opacity-80"
                href="tel:88222122250"
              >
                <Phone className="inline-block h-3 w-3" /> Phone. 088222122250
              </a>
              <br />
              <a
                className="transition-opacity hover:opacity-80"
                href="mailto:layanan@dataritravel.com"
              >
                <Mail className="inline-block h-3 w-3" /> Email.
                layanan@dataritravel.com
              </a>
            </p>
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <a
                href="https://web.facebook.com/dataritravelindonesia"
                className="transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dataritravelindonesia/"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-opacity hover:opacity-80"
                aria-label="YouTube"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-row flex-wrap justify-center gap-2 border-t-[1px] border-white pt-8 pb-4 sm:justify-between">
          <p className="text-yellow-400">
            &copy; {new Date().getFullYear()} PT. Dallas Wisata Mandiri. Semua
            Hak Cipta Dilindungi.
          </p>
          <p className="text-yellow-400">Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  );
}
