import timeline from "../../data/timeline.json";

const getIcon = (title) => {
  switch (title) {
    case "Pembentukan Panitia":
      return "👥";

    case "Gotong Royong Pembangunan Lapangan":
    case "Gotong Royong Pembuatan Lapangan":
      return "🏗️";

    case "Penggalangan Sponsor":
      return "🤝";

    case "Technical Meeting":
      return "📋";

    case "Opening Ceremony":
      return "🎉";

    case "Pelaksanaan Turnamen":
      return "🏐";

    case "Grand Final & Penutupan":
      return "🏆";

    default:
      return "📌";
  }
};

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="inline-block px-5 py-2 rounded-full font-semibold mb-5"
            style={{
              background: "#E8F8FD",
              color: "#1A1B5E",
            }}
          >
            TIMELINE KEGIATAN
          </span>

          <h2
            className="text-5xl font-black"
            style={{
              color: "#1A1B5E",
            }}
          >
            Perjalanan MS V-FEST 2026
          </h2>

          <p className="mt-5 text-slate-500 text-lg">
            Seluruh proses persiapan hingga penutupan kegiatan.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Garis */}

          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-1 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom,#20C9F3,#E5007D)",
            }}
          ></div>

          {timeline.map((item, index) => (

            <div
              key={index}
              className="relative flex items-start gap-8 mb-12"
            >

              {/* Icon */}

              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg shrink-0"
                style={{
                  background: "white",
                  border: "4px solid #20C9F3",
                }}
              >
                {getIcon(item.title)}
              </div>

              {/* Card */}

              <div
                className="flex-1 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-slate-100"
              >

                <span
                  className="font-semibold"
                  style={{
                    color: "#20C9F3",
                  }}
                >
                  {item.date}
                </span>

                <h3
                  className="text-2xl font-bold mt-2"
                  style={{
                    color: "#1A1B5E",
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-4 leading-8">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;