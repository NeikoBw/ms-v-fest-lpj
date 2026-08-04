import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const Statistics = ({ data }) => {
  const statistik = [
    {
      icon: "👥",
      title: "Total Penonton",
      value: data?.totalPenonton || 0,
      color: "#20C9F3",
    },
    {
      icon: "🎟️",
      title: "Tiket Terjual",
      value: data?.tiketTerjual || 0,
      color: "#E5007D",
    },
    {
      icon: "💰",
      title: "Pendapatan Tiket",
      value: data?.pendapatanTiket || 0,
      prefix: "Rp ",
      color: "#20C9F3",
    },
    {
      icon: "🚗",
      title: "Pendapatan Parkir",
      value: data?.pendapatanParkir || 0,
      prefix: "Rp ",
      color: "#E5007D",
    },
    {
      icon: "🧹",
      title: "Dana Kebersihan",
      value: data?.danaKebersihan || 0,
      prefix: "Rp ",
      color: "#20C9F3",
    },
    {
      icon: "🏐",
      title: "Total Pertandingan",
      value: data?.totalPertandingan || 0,
      color: "#E5007D",
    },
  ];

  const chartData = {
    labels: data?.grafikTiket?.map((item) => item.tanggal) || [],
    datasets: [
      {
        label: "Tiket Terjual",
        data: data?.grafikTiket?.map((item) => item.tiket) || [],

        borderColor: "#20C9F3",
        backgroundColor: "rgba(32,201,243,0.15)",

        borderWidth: 4,
        tension: 0.4,
        fill: true,

        pointBackgroundColor: "#E5007D",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,

        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#1AABSE",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        displayColors: false,

        callbacks: {
          label: (context) =>
            `${context.parsed.y.toLocaleString("id-ID")} Tiket`,
        },
      },
    },

    elements: {
      line: {
        borderCapStyle: "round",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#64748B",
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          color: "#EEF2F7",
        },

        ticks: {
          color: "#64748B",
          callback: (value) => value.toLocaleString("id-ID"),
        },
      },
    },
  };

  return (
    <section id="statistik" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-2 rounded-full font-semibold mb-4"
            style={{
              background: "#E8F8FD",
              color: "#1A1B5E",
            }}
          >
            STATISTIK
          </span>

          <h2
            className="text-5xl font-black"
            style={{ color: "#1A1B5E" }}
          >
            MS V-FEST Dalam Angka
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            Ringkasan pelaksanaan kegiatan.
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistik.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 border-t-4 hover:-translate-y-2 duration-300"
              style={{ borderColor: item.color }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3
                className="text-4xl font-black mt-8"
                style={{ color: "#1A1B5E" }}
              >
                {item.prefix || ""}
                {Number(item.value).toLocaleString("id-ID")}
              </h3>

              <p className="mt-3 text-slate-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-16 bg-white rounded-[32px] shadow-xl border border-slate-100 p-10">
          <h3
            className="text-3xl font-black mb-2"
            style={{ color: "#1A1B5E" }}
          >
            📈 Tren Penjualan Tiket
          </h3>

          <p className="text-slate-500 mb-8">
            Jumlah tiket yang terjual setiap hari selama turnamen.
          </p>

          <div className="h-[420px]">
            {data?.grafikTiket?.length ? (
              <Line data={chartData} options={options} />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                Belum ada data penjualan tiket.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;