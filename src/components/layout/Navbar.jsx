import logoMS from "../../assets/logo ms.png";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10"
      style={{ background: "rgba(11,16,38,.75)" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <img
            src={logoMS}
            alt="Logo MS V-FEST"
            className="w-15 h-15 object-contain"
          />

          <span
            className="text-xl font-bold"
            style={{ color: "#FFFFFF" }}
          >
            MS V-FEST 2026
          </span>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#tentang"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Tentang
            </a>
          </li>

          <li>
            <a
              href="#timeline"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#peserta"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Daftar Peserta
            </a>
          </li>
          <li>
            <a
            href="#statistik"
            className="hover:text-cyan-300 duration-300"
            style={{ color: "#FFFFFF" }}
            >
              Statistik
              </a>
            </li>
          <li>
            <a
              href="#hasil"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Hasil
            </a>
          </li>

          <li>
            <a
              href="#sponsor"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Sponsor
            </a>
          </li>
          <li>
            <a
              href="#donatur"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Donatur
            </a>
          </li>

          <li>
            <a
              href="#keuangan"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Keuangan
            </a>
          </li>
          <li>
            <a
              href="#dokumentasi"
              className="hover:text-cyan-300 duration-300"
              style={{ color: "#FFFFFF" }}
            >
              Dokumentasi
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;