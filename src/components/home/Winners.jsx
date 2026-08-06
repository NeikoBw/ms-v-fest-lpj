import winners from "../../data/winners.json";
import teamLogos from "../../data/teamLogo";
import teamPhotos from "../../data/teamPhoto";

const medal = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
  4: "🏅",
};

const borderColor = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#CD7F32",
  4: "#20C9F3",
};

const getTeamLogo = (name = "") => {
  if (!name) return null;

  // Ambil kata pertama dari nama tim
  const keyword = name
    .split(" ")[0]
    .toLowerCase()
    .trim();

  const path = Object.keys(teamLogos).find((key) => {
    const filename = key
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|svg)$/i, "")
      .toLowerCase()
      .trim();

    return filename === keyword;
  });

  return path ? teamLogos[path] : null;
};
const getTeamPhoto = (name = "") => {
  if (!name) return null;

  const keyword = name
    .split(" ")[0]
    .toLowerCase()
    .trim();

  const path = Object.keys(teamPhotos).find((key) => {
    const filename = key
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .toLowerCase();

    return filename === keyword;
  });

  return path ? teamPhotos[path] : null;
};
const renderCategory = (title, data) => {
  const juara1 = data.find((item) => item.position === 1);

  if (!juara1) return null;

  const juara1Logo = getTeamLogo(juara1.team);
  const juara1Photo = getTeamPhoto(juara1.team);

  const lainnya = data.filter(
    (item) => item.position !== 1
  );

  return (
    <div className="mb-24">

      <h3
        className="text-3xl font-black text-center mb-10"
        style={{ color: "#1A1B5E" }}
      >
        {title}
      </h3>

      {/* ==========================
            JUARA 1
      =========================== */}

      <div className="flex justify-center mb-12">

        <div
          className="w-full max-w-xl rounded-3xl border-4 p-10 shadow-2xl text-center hover:scale-105 transition duration-300"
          style={{
            borderColor: borderColor[1],
            background: "linear-gradient(135deg,#FFFFFF,#F8FCFF)",
          }}
        >

          {/* FOTO TIM */}
          {juara1Photo && (
            <img
              src={juara1Photo}
              alt={juara1.team}
              className="w-full h-72 object-cover rounded-2xl mb-8"
            />
          )}

          {/* MEDALI */}
          <div className="text-8xl">
            {medal[1]}
          </div>

          <h2
            className="text-4xl font-black mt-5"
            style={{ color: "#1A1B5E" }}
          >
            JUARA 1
          </h2>

          {/* LOGO + NAMA TIM */}
          <div className="flex justify-center mt-7">

            <div className="flex items-center gap-4 bg-slate-50 border rounded-full px-6 py-3 shadow-sm">

              {juara1Logo && (
                <img
                  src={juara1Logo}
                  alt={juara1.team}
                  className="w-14 h-14 rounded-full object-contain bg-white border border-slate-200"
                />
              )}

              <div className="text-left">

                <h3 className="text-2xl font-bold text-[#1A1B5E]">
                  {juara1.team}
                </h3>

                <p className="text-sm text-slate-500">
                  MS V-FEST 2026 Champion
                </p>

              </div>

            </div>

          </div>

          {/* HADIAH */}
          <div
            className="inline-block mt-7 px-6 py-3 rounded-full text-white font-bold"
            style={{
              background:
                "linear-gradient(90deg,#20C9F3,#E5007D)",
            }}
          >
            {juara1.prize}
          </div>

        </div>

      </div>

      {/* ==========================
            JUARA 2 - 4
      =========================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {lainnya.map((item) => {

          const logo = getTeamLogo(item.team);
          const photo = getTeamPhoto(item.team);

          return (
                        <div
              key={item.position}
              className="bg-white rounded-3xl shadow-lg border-4 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              style={{
                borderColor: borderColor[item.position],
              }}
            >
                {photo && (
                  <img
                  src={photo}
                  alt={item.team}
                  className="w-full h-44 object-cover rounded-2x1 mb-5"/>
                )}
                <div className="text-6xl mb-4">
                {medal[item.position]}
              </div>

              <h4
                className="text-2xl font-bold"
                style={{ color: "#1A1B5E" }}
              >
                JUARA {item.position}
              </h4>

              <div className="flex justify-center mt-5">

                <div className="flex items-center gap-3 bg-slate-50 border rounded-full px-5 py-3 shadow-sm">

                  {logo && (
                    <img
                      src={logo}
                      alt={item.team}
                      className="w-12 h-12 rounded-full object-contain bg-white border border-slate-200"
                    />
                  )}

                  <div className="text-left">

                    <h3 className="font-bold text-[#1A1B5E] text-lg">
                      {item.team}
                    </h3>

                    <p className="text-xs text-slate-500">
                      MS V-FEST 2026
                    </p>

                  </div>

                </div>

              </div>

              <div
                className="inline-block mt-6 px-5 py-2 rounded-full text-white font-bold"
                style={{
                  background:
                    "linear-gradient(90deg,#20C9F3,#E5007D)",
                }}
              >
                {item.prize}
              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
};

const Winners = () => {

  const putra = winners.filter(
    (item) => item.category === "Putra"
  );

  const putri = winners.filter(
    (item) => item.category === "Putri"
  );

  return (

    <section
      id="hasil"
      className="py-28 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span
            className="inline-block px-5 py-2 rounded-full font-semibold mb-5"
            style={{
              background: "#E8F8FD",
              color: "#1A1B5E",
            }}
          >
            HASIL TURNAMEN
          </span>
                    <h2
            className="text-5xl font-black"
            style={{
              color: "#1A1B5E",
            }}
          >
            Hall of Champions
          </h2>

          <p className="text-slate-500 text-lg mt-5">
            Para Juara Turnamen Bola Voli Plastik MS V-FEST 2026.
            Terima kasih atas semangat sportivitas yang telah ditunjukkan
            seluruh peserta selama pertandingan berlangsung.
          </p>

        </div>

        {renderCategory(
          "🏐 Kategori Putra",
          putra
        )}

        {renderCategory(
          "🏐 Kategori Putri",
          putri
        )}

      </div>

    </section>

  );
};
export default Winners;