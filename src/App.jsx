import { useEffect, useState } from "react";
import { getData } from "./services/api";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Participants from "./components/home/Participants";
import Statistics from "./components/home/Statistics";
import Timeline from "./components/home/Timeline";
import Gallery from "./components/home/Gallery";
import Winners from "./components/home/Winners";
import Sponsors from "./components/home/Sponsors";
import FinanceSummary from "./components/home/FinanceSummary";
import Footer from "./components/layout/Footer";

function App() {
  const [sheetData, setSheetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();

        console.log(data);

        setSheetData(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Participants data={sheetData?.peserta} />
      <Statistics data={sheetData?.statistik} />
      <Gallery />
      <Winners />


      {/* <Sponsors data={sheetData} /> */}

      {/* <FinanceSummary data={sheetData} /> */}

      <Footer />
    </>
  );
}

export default App;