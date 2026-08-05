import { useState } from "react";
import sponsorLogos from "../../data/sponsor";

const getLogo = (name = "") => {
  if (!name) return null;

  const search = String(name)
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/'/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, " ")
    .trim();

  const path = Object.keys(sponsorLogos).find((key) => {
    const filename = key
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|svg)$/i, "")
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/,/g, "")
      .replace(/'/g, "")
      .replace(/&/g, "and")
      .replace(/\s+/g, " ")
      .trim();

    return filename === search;
  });

  return path ? sponsorLogos[path] : null;
};

const Sponsors = ({ sponsors = [] }) => {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsorList = sponsors.filter(
    (item) =>
      item["Nama Sponsor"] ||
      item["Nama"] ||
      item["Sponsor"]
  );

  return (
    <section
      id="sponsor"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-sky-100 text-[#1A1B5E] font-semibold mb-5">
            APRESIASI
          </span>

          <h2 className="text-5xl font-black text-[#1A1B5E]">
            Sponsor MS V-FEST 2026
          </h2>

          <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Terima kasih kepada seluruh sponsor yang telah
            memberikan dukungan sehingga kegiatan
            <span className="font-bold"> MS V-FEST 2026 </span>
            dapat terselenggara dengan baik.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-14">

          {sponsorList.map((item, index) => {

            const nama =
              item["Nama Sponsor"] ||
              item["Nama"] ||
              item["Sponsor"] ||
              "";

            const nominal =
              item["Jumlah"] ||
              item["Nominal"] ||
              item["Nominal Sponsor"] ||
              "-";

            const kategori =
              item["Kategori"] ||
              item["Jenis"] ||
              "Sponsor";

            const logo = getLogo(nama);

            return (

              <div
                key={item.No || index}
                onClick={() =>
                  setSelectedSponsor({
                    nama,
                    nominal,
                    kategori,
                    logo,
                  })
                }
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 shadow hover:shadow-2xl hover:-translate-y-2 duration-300"
              >

                <div className="h-44 bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-6">

                  {logo ? (
                    <img
                      src={logo}
                      alt={nama}
                      className="max-h-28 max-w-full object-contain group-hover:scale-110 duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center">

                      <div className="w-20 h-20 rounded-full bg-[#1A1B5E] text-white flex items-center justify-center text-3xl font-bold">
                        {nama.charAt(0)}
                      </div>

                      <p className="text-xs text-slate-400 mt-3">
                        Logo belum tersedia
                      </p>

                    </div>
                  )}

                </div>

                <div className="p-6">

                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
                    {kategori}
                  </span>

                  <h3 className="mt-4 text-[#1A1B5E] font-bold leading-snug min-h-[56px]">
                    {nama}
                  </h3>

                  <div className="flex justify-between items-center mt-6">

                    <span className="text-xs text-slate-400">
                      Klik untuk melihat detail
                    </span>

                    <svg
                      className="w-5 h-5 text-sky-500 group-hover:translate-x-1 duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                  </div>

                </div>

              </div>

            );

          })}

        </div>
                {/* Modal Detail Sponsor */}
        {selectedSponsor && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedSponsor(null)}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedSponsor(null)}
                className="absolute top-4 right-5 text-3xl text-slate-400 hover:text-red-500"
              >
                ×
              </button>

              {/* Logo */}
              <div className="flex justify-center">
                {selectedSponsor.logo ? (
                  <img
                    src={selectedSponsor.logo}
                    alt={selectedSponsor.nama}
                    className="max-h-36 object-contain"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[#1A1B5E] text-white flex items-center justify-center text-5xl font-bold">
                    {selectedSponsor.nama.charAt(0)}
                  </div>
                )}
              </div>

              {/* Nama */}
              <h2 className="text-3xl font-black text-center text-[#1A1B5E] mt-6">
                {selectedSponsor.nama}
              </h2>

              {/* Badge */}
              <div className="flex justify-center mt-4">
                <span className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
                  {selectedSponsor.kategori}
                </span>
              </div>

              {/* Nominal */}
              <div className="bg-sky-50 rounded-2xl p-5 mt-6 text-center">
                <p className="text-slate-500 text-sm">
                  Dukungan Sponsor
                </p>
                <p className="text-3xl font-black text-sky-600 mt-2">
                  {selectedSponsor.nominal}
                </p>
              </div>

              {/* Ucapan */}
              <p className="text-slate-600 leading-relaxed text-center mt-6">
                Terima kasih kepada
                <span className="font-bold text-[#1A1B5E]">
                  {" "}
                  {selectedSponsor.nama}
                </span>
                {" "}atas dukungan yang telah diberikan kepada
                <span className="font-bold text-[#1A1B5E]">
                  {" "}MS V-FEST 2026
                </span>.
                Dukungan ini menjadi bagian penting dalam menyukseskan
                penyelenggaraan turnamen serta mempererat semangat
                kebersamaan masyarakat.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Sponsors;