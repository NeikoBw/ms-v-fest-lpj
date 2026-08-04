import sponsors from "../../data/sponsors.json";

const Sponsors = () => {
  return (
    <section 
    id="sponsor"
    className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Sponsor & Partner
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Terima kasih kepada seluruh sponsor dan pihak yang telah mendukung
          terselenggaranya MS V-FEST 2026.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {sponsors.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl p-8 text-center hover:shadow-lg transition">

              <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-5 flex items-center justify-center text-gray-500">
                Logo
              </div>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-orange-500 mt-2">
                {item.category}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Sponsors;