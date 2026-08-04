import winners from "../../data/winners.json";

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

const renderCategory = (title, data) => {
  const juara1 = data.find((item) => item.position === 1);
  const lainnya = data.filter((item) => item.position !== 1);

  return (
    <div className="mb-24">

      <h3
        className="text-3xl font-black text-center mb-10"
        style={{ color: "#1A1B5E" }}
      >
        {title}
      </h3>

      {/* JUARA 1 */}

      <div className="flex justify-center mb-12">

        <div
          className="w-full max-w-xl rounded-3xl p-10 shadow-2xl text-center border-4 hover:scale-105 transition duration-300"
          style={{
            borderColor: borderColor[1],
            background:
              "linear-gradient(135deg,#FFFFFF,#F8FCFF)",
          }}
        >

          <div className="text-8xl">
            {medal[1]}
          </div>

          <h2
            className="text-4xl font-black mt-5"
            style={{ color: "#1A1B5E" }}
          >
            JUARA 1
          </h2>

          <p className="text-2xl font-semibold mt-5">
            {juara1.team}
          </p>

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

      {/* JUARA 2-4 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {lainnya.map((item) => (

          <div
            key={item.position}
            className="bg-white rounded-3xl shadow-lg border-4 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            style={{
              borderColor: borderColor[item.position],
            }}
          >

            <div className="text-6xl mb-4">
              {medal[item.position]}
            </div>

            <h4
              className="text-2xl font-bold"
              style={{ color: "#1A1B5E" }}
            >
              JUARA {item.position}
            </h4>

            <p className="text-xl font-semibold mt-4">
              {item.team}
            </p>

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

        ))}

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
            Daftar Juara
          </h2>

          <p className="text-slate-500 text-lg mt-5">
            Hasil akhir Turnamen Bola Voli Plastik MS V-FEST 2026.
          </p>

        </div>

        {renderCategory("🏐 Kategori Putra", putra)}

        {renderCategory("🏐 Kategori Putri", putri)}

      </div>

    </section>

  );
};

export default Winners;