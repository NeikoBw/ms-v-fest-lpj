import logoM from "../../assets/logo mardi.png";
import bgHero from "../../assets/Bg.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(11,16,38,0.88) 0%,
            rgba(26,27,94,0.82) 45%,
            rgba(32,201,243,0.65) 100%
          ),
          url(${bgHero})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: "#20C9F3",
          top: "-150px",
          right: "-120px",
        }}
      />

      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{
          background: "#E5007D",
          bottom: "-150px",
          left: "-120px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">

          {/* Logo Mardisantoso */}
          <img
            src={logoM}
            alt="Logo Mardisantoso"
            className="w-32 md:w-40 lg:w-48 mb-8 drop-shadow-2xl"
          />

          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(255,255,255,.12)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,.15)",
            }}
          >
            DIGITAL EVENT REPORT
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
            MS V-FEST
            <br />
            2026
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            Laporan digital pelaksanaan Turnamen Bola Voli Plastik
            yang diselenggarakan oleh
            <span className="font-bold text-white">
              {" "}
              Karang Taruna Mardisantoso Ngering
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#tentang"
              className="px-8 py-4 rounded-full text-white font-bold transition hover:scale-105"
              style={{
                background: "linear-gradient(90deg,#20C9F3,#E5007D)",
              }}
            >
              Jelajahi LPJ
            </a>

            <a
              href="#dokumentasi"
              className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#1A1B5E] transition"
            >
              Lihat Dokumentasi
            </a>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

            {[
              {
                value: "22",
                label: "Tim",
              },
              {
                value: "26",
                label: "Pertandingan",
              },
              {
                value: "50",
                label: "Panitia",
              },
              {
                value: "16",
                label: "Sponsor",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.12)",
                }}
              >
                <h2 className="text-4xl font-black text-white">
                  {item.value}
                </h2>

                <p className="text-slate-300 mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;