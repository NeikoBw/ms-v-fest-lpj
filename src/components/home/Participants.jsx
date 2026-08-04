function Participants({ data }) {
  if (!data || data.length === 0) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1A1B5E]">
            Daftar Peserta
          </h2>
          <p className="mt-4 text-gray-500">Memuat data...</p>
        </div>
      </section>
    );
  }

  const putra = data.filter((item) => item["Kategori"] === "Putra");
  const putri = data.filter((item) => item["Kategori"] === "Putri");

  return (
    <section id="peserta" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Judul */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1A1B5E]">
            Daftar Peserta
          </h2>

          <div className="w-24 h-1 bg-[#00D2FF] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4">
            Seluruh tim peserta Turnamen Bola Voli Plastik MS V-Fest 2026
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-[#1A1B5E]">
            <p className="text-gray-500 font-medium">
              Total Peserta
            </p>

            <h3 className="text-5xl font-bold text-[#1A1B5E] mt-3">
              {data.length}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Tim Terdaftar
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-[#00D2FF]">
            <p className="text-gray-500 font-medium">
              Kategori Putra
            </p>

            <h3 className="text-5xl font-bold text-[#00D2FF] mt-3">
              {putra.length}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Tim
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-[#E20074]">
            <p className="text-gray-500 font-medium">
              Kategori Putri
            </p>

            <h3 className="text-5xl font-bold text-[#E20074] mt-3">
              {putri.length}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Tim
            </p>
          </div>

        </div>

        {/* PUTRA */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">

          <div className="bg-[#1A1B5E] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              🏐 Kategori Putra
            </h3>

            <span className="bg-[#00D2FF] text-[#1A1B5E] px-3 py-1 rounded-full text-sm font-bold">
              {putra.length} Tim
            </span>
          </div>

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-3 text-left w-20">No</th>
                <th className="px-5 py-3 text-left">
                  Nama Tim
                </th>
              </tr>
            </thead>

            <tbody>

              {putra.map((item) => (

                <tr
                  key={item["No"]}
                  className="border-b hover:bg-sky-50 transition"
                >
                  <td className="px-5 py-4">
                    {item["No"]}
                  </td>

                  <td className="px-5 py-4 font-medium">
                    {item["Nama Peserta (Tim)"]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* PUTRI */}

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="bg-[#1A1B5E] text-white px-6 py-4 flex items-center justify-between">

            <h3 className="text-xl font-semibold">
              🏐 Kategori Putri
            </h3>

            <span className="bg-[#E20074] text-white px-3 py-1 rounded-full text-sm font-bold">
              {putri.length} Tim
            </span>

          </div>

          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-3 text-left w-20">
                  No
                </th>

                <th className="px-5 py-3 text-left">
                  Nama Tim
                </th>
              </tr>
            </thead>

            <tbody>

              {putri.map((item) => (

                <tr
                  key={item["No"]}
                  className="border-b hover:bg-pink-50 transition"
                >
                  <td className="px-5 py-4">
                    {item["No"]}
                  </td>

                  <td className="px-5 py-4 font-medium">
                    {item["Nama Peserta (Tim)"]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default Participants;