const FinanceSummary = () => {

  return (

    <section 
    className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">

          Ringkasan Keuangan

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <p className="text-gray-500">
              Total Pemasukan
            </p>

            <h3 className="text-3xl font-bold text-green-600 mt-3">
              Rp 0
            </h3>

          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <p className="text-gray-500">
              Total Pengeluaran
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-3">
              Rp 0
            </h3>

          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center">

            <p className="text-gray-500">
              Saldo Akhir
            </p>

            <h3 className="text-3xl font-bold text-blue-600 mt-3">
              Rp 0
            </h3>

          </div>

        </div>

      </div>

    </section>

  );

};

export default FinanceSummary;