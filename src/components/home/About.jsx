import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaVolleyballBall,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaCalendarAlt />,
      title: "Tanggal Pelaksanaan",
      value: "20 Juli – 1 Agustus 2026",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Lokasi",
      value: "Lapangan Voli Ngering, Jogonalan, Klaten",
    },
    {
      icon: <FaUsers />,
      title: "Peserta",
      value: "16 tim Putra dan 6 tim Putri",
    },
    {
      icon: <FaVolleyballBall />,
      title: "Penyelenggara",
      value: "Karang Taruna Mardisantoso Ngering",
    },
  ];

  return (
    <section id="tentang" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Kiri */}
          <div>

            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{
                background: "#E8F8FD",
                color: "#1A1B5E",
              }}
            >
              TENTANG KEGIATAN
            </span>

            <h2
              className="text-5xl font-black leading-tight"
              style={{ color: "#1A1B5E" }}
            >
              MS V-FEST 2026
            </h2>

            <p className="mt-8 text-slate-600 leading-8 text-lg">

              MS V-FEST merupakan turnamen bola voli plastik yang
              diselenggarakan sebagai bagian dari peringatan Hari
              Kemerdekaan Republik Indonesia ke-81.

            </p>

            <p className="mt-5 text-slate-600 leading-8 text-lg">

              Website ini dibuat sebagai media laporan pertanggungjawaban
              digital yang menyajikan informasi kegiatan secara
              transparan, mulai dari pelaksanaan acara, dokumentasi,
              hasil pertandingan, sponsor hingga laporan keuangan.

            </p>

            <div className="flex gap-10 mt-10">

              <div>

                <h3
                  className="text-4xl font-black"
                  style={{ color: "#20C9F3" }}
                >
                  22
                </h3>

                <p className="text-slate-500">
                  Tim Peserta
                </p>

              </div>

              <div>

                <h3
                  className="text-4xl font-black"
                  style={{ color: "#E5007D" }}
                >
                  26
                </h3>

                <p className="text-slate-500">
                  Pertandingan
                </p>

              </div>

            </div>

          </div>

          {/* Kanan */}

          <div className="grid sm:grid-cols-2 gap-6">

            {cards.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 border border-slate-100"
              >

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg,#20C9F3,#E5007D)",
                    color: "#fff",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-bold text-xl"
                  style={{ color: "#1A1B5E" }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-7">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;