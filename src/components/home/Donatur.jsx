import { useState } from "react";

const Donatur = ({ donatur = [] }) => {
  const [selectedDonatur, setSelectedDonatur] = useState(null);

  const donaturList = donatur.filter(
    (item) =>
      item["Nama Donatur"] ||
      item["Nama"] ||
      item["Donatur"]
  );

  return (
    <section id="donatur" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-[#E5007D] font-semibold mb-5">
            APRESIASI
          </span>

          <h2 className="text-5xl font-black text-[#1A1B5E]">
            Donatur MS V-FEST 2026
          </h2>

          <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Terima kasih kepada seluruh donatur yang telah
            memberikan dukungan untuk menyukseskan
            penyelenggaraan MS V-FEST 2026.
          </p>
        </div>

        {/* List Donatur */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">

          {donaturList.map((item, index) => {

            const nama =
              item["Nama Donatur"] ||
              item["Nama"] ||
              item["Donatur"] ||
              "-";

            const nominal =
              item["Jumlah"] ||
              item["Nominal"] ||
              "-";

            return (
              <div
                key={item.No || index}
                onClick={() =>
                  setSelectedDonatur({
                    nama,
                    nominal,
                  })
                }
                className="bg-white rounded-2xl border border-slate-200 shadow hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer p-6 flex flex-col justify-between min-h-[180px]"
              >

                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-center text-[#1A1B5E] font-bold text-xl leading-relaxed">
                    {nama}
                  </h3>
                </div>

                <button className="mt-6 w-full rounded-xl bg-[#1A1B5E] text-white py-3 font-semibold hover:bg-[#2A2C84] duration-300">
                  Lihat Detail
                </button>

              </div>
            );

          })}

        </div>

        {/* Modal Detail */}
        {selectedDonatur && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDonatur(null)}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDonatur(null)}
                className="absolute top-4 right-5 text-3xl text-slate-400 hover:text-red-500"
              >
                ×
              </button>

              <h2 className="text-3xl font-black text-center text-[#1A1B5E]">
                {selectedDonatur.nama}
              </h2>

              <div className="bg-pink-50 rounded-2xl p-5 mt-8 text-center">
                <p className="text-slate-500 text-sm">
                  Nominal Donasi
                </p>

                <p className="text-3xl font-black text-[#E5007D] mt-2">
                  {selectedDonatur.nominal}
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed text-center mt-6">
                Terima kasih kepada
                <span className="font-bold text-[#1A1B5E]">
                  {" "}
                  {selectedDonatur.nama}
                </span>
                {" "}
                atas dukungan yang telah diberikan kepada
                <span className="font-bold text-[#1A1B5E]">
                  {" "}
                  MS V-FEST 2026
                </span>.
                Dukungan tersebut menjadi bagian penting dalam
                menyukseskan penyelenggaraan kegiatan serta
                memperkuat semangat gotong royong masyarakat.
              </p>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Donatur;