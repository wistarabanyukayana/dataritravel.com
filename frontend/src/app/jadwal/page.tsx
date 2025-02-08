"use client";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex grow justify-center overflow-hidden">
      {/* Main Content */}
      <div className="font-montserrat container mx-auto max-w-7xl px-1 pt-5 pb-40 font-bold sm:px-20 sm:pt-12">
        <div className="px-3 pb-[20px] text-center text-2xl text-black sm:text-4xl">
          <h1>Jadwal & Biaya Umroh {currentYear}</h1>
        </div>
        <div className="table-auto text-sm font-normal">
          <table className="min-w-full caption-bottom border-collapse border-spacing-[2px]">
            <thead className="bg-transparent">
              <tr>
                <th className="p-[.5rem]" rowSpan={2}>
                  PAKET UMROH
                </th>
                <th className="p-[.5rem]" rowSpan={2}>
                  SEAT
                </th>
                <th className="p-[.5rem]" colSpan={3}>
                  BIAYA
                </th>
              </tr>
              <tr>
                <th className="p-[.5rem]">QUAD</th>
                <th className="p-[.5rem]">TRIPLE</th>
                <th className="p-[.5rem]">DOUBLE</th>
              </tr>
            </thead>
            <tbody className="bg divide-y divide-gray-900 bg-transparent">
              {/* Example row */}
              <tr className="text-center text-sm text-black">
                <td className="px-6 py-4 whitespace-nowrap">Example Package</td>
                <td className="px-6 py-4 whitespace-nowrap">Full</td>
                <td className="px-6 py-4 whitespace-nowrap">Rp 10,000,000</td>
                <td className="px-6 py-4 whitespace-nowrap">Rp 12,000,000</td>
                <td className="px-6 py-4 whitespace-nowrap">Rp 14,000,000</td>
              </tr>
              {/* Add your dynamic rows here */}
              {/* {Object.entries(groupedPackages) &&
        Object.entries(groupedPackages).map(([monthYear, monthPackages]) => (
          <React.Fragment key={monthYear}>
            <tr className="bg-gray-100">
              <td colSpan={5} className="px-6 py-4 font-bold">
                Paket Umroh {monthYear}
              </td>
            </tr>
            {monthPackages.map((pkg) => (
              <tr key={pkg.Id} className="bg-white text-gray-900">
                <td className="px-6 py-4">
                  <Link href={`/${pkg.Id}`}>
                    <b>-- {pkg.Title}</b>
                  </Link>
                </td>
                <td className="px-6 py-4">Full</td>
                <td className="px-6 py-4 text-center">
                  {pkg.Prices.find((price) => price.PriceType === "QUAD")
                    ? `Rp ${pkg.Prices.find(
                        (price) => price.PriceType === "QUAD"
                      ).Amount.toLocaleString()}`
                    : "tidak tersedia"}
                </td>
                <td className="px-6 py-4 text-center">
                  {pkg.Prices.find((price) => price.PriceType === "TRIPLE")
                    ? `Rp ${pkg.Prices.find(
                        (price) => price.PriceType === "TRIPLE"
                      ).Amount.toLocaleString()}`
                    : "tidak tersedia"}
                </td>
                <td className="px-6 py-4 text-center">
                  {pkg.Prices.find((price) => price.PriceType === "DOUBLE")
                    ? `Rp ${pkg.Prices.find(
                        (price) => price.PriceType === "DOUBLE"
                      ).Amount.toLocaleString()}`
                    : "tidak tersedia"}
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
