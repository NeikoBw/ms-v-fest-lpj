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

        {/* Logo kanan */}
        <div className="hidden lg:flex absolute top-8 -right-20 xl:-right-28 items-center gap-5">

          <img
            src={logoM}
            alt="Logo Mardisantoso"
            className="w-28 xl:w-32 drop-shadow-2xl"
          />

          <div>

            <p className="uppercase tracking-[0.3em] text-sky-300 text-xs font-semibold mb-1">
              Organisasi
            </p>

            <h3 className="text-white font-black text-3xl leading-tight">
              Karang Taruna
            </h3>

            <h3 className="text-white font-black text-3xl leading-tight">
              Mardisantoso
            </h3>

            <p className="text-slate-300 mt-2">
              Ngering, Jogonalan, Klaten
            </p>

          </div>

        </div>

        <div className="max-w-4xl">

          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{
              background: "rgba(255,255,255,.12)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,.15)",
            }}
          >
            DIGITAL EVENT REPORT
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            MS V-FEST
          </h1>

          <h1 className="text-6xl md:text-8xl font-black text-white mt-2 leading-none">
            2026
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl">
            Laporan digital pelaksanaan
            <span className="font-bold text-white">
              {" "}
              Turnamen Bola Voli Plastik
            </span>{" "}
            yang diselenggarakan oleh
            <span className="font-bold text-white">
              {" "}
              Karang Taruna Mardisantoso Ngering bersama tim bola voli Satria Muda Ngering
            </span>
            .
          </p>
{/* Tombol */}
<div className="flex flex-wrap gap-5 mt-12">

  <a
    href="/LPJ-MS-VFEST-2026.pdf"
    download
    className="px-8 py-4 rounded-full text-white font-bold transition hover:scale-105 flex items-center gap-3"
    style={{
      background: "linear-gradient(90deg,#20C9F3,#E5007D)",
    }}
  >
    📄 Download LPJ
  </a>

  <a
    href="#dokumentasi"
    className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#1A1B5E] transition"
  >
    📸 Lihat Dokumentasi
  </a>

</div>
          {/* Informasi Event */}

<div className="mt-20 max-w-3xl">

  <div
    className="backdrop-blur-xl rounded-3xl px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    style={{
      background: "rgba(255,255,255,.08)",
      border: "1px solid rgba(255,255,255,.12)",
    }}
  >

    {/* Tanggal */}
    <div>
      <p className="text-sky-300 text-xs font-semibold tracking-[0.25em] uppercase">
        Tanggal Pelaksanaan
      </p>

      <h3 className="text-white text-2xl md:text-3xl font-black mt-2">
        20 Juli – 1 Agustus 2026
      </h3>
    </div>

    {/* Garis */}
    <div className="hidden md:block w-px h-14 bg-white/15"></div>

    {/* Lokasi */}
    <div>
      <p className="text-sky-300 text-xs font-semibold tracking-[0.25em] uppercase">
        Lokasi
      </p>

      <h3 className="text-white text-xl font-bold mt-2">
        Ngering, Jogonalan
      </h3>

      <p className="text-slate-300 text-sm">
        Kabupaten Klaten
      </p>
    </div>

    {/* Garis */}
    <div className="hidden md:block w-px h-14 bg-white/15"></div>

    {/* Event */}
    <div>
      <p className="text-sky-300 text-xs font-semibold tracking-[0.25em] uppercase">
        Event
      </p>

      <h3 className="text-white text-xl font-bold mt-2">
        Turnamen Bola Voli Plastik
      </h3>
    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
};

export default Hero;