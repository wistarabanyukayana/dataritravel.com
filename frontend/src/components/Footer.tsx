export default function Footer() {
    return (
      <footer className="w-full bg-black text-white px-8 py-8 text-center font-['Montserrat']">
        <div className="mx-auto flex max-w-7x1 flex-col items-center justify-center text-sm text-white">
          <div className="w-full flex flex-row justify-center sm:justify-between sm:text-start">
            <div className="grow">

            </div>
            <div className="grow"></div>
            <div className="grow"></div>
          </div>
          <div className="w-full border-t-[1px] border-white flex flex-row flex-wrap pt-8 pb-4 gap-2 justify-center sm:justify-between">
            <p className="text-xs text-yellow-400">&copy; {new Date().getFullYear()} PT. Dallas Wisata Mandiri. Semua Hak Cipta Dilindungi.</p>
            <p className="text-xs text-yellow-400">Syarat & Ketentuan</p>
          </div>
        </div>
      </footer>
    );
  }
  