const CardList = () => {
    const cardData = [
      { cardNo: 'GP-1001', registrationFee: '500 BDT', listDate: '2025-04-20', transfer: 'Pending' },
      { cardNo: 'GP-1002', registrationFee: '500 BDT', listDate: '2025-04-21', transfer: 'Completed' },
      { cardNo: 'GP-1003', registrationFee: '500 BDT', listDate: '2025-04-22', transfer: 'Pending' },
    ];
  
    return (
      <div className="w-full px-4 pt-30 sm:px-6 lg:px-12 py-10 bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Card Registration List
        </h2>
  
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Desktop & Tablet Scrollable Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[600px] w-full text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">SL</th>
                  <th className="px-4 py-3 whitespace-nowrap">Card No</th>
                  <th className="px-4 py-3 whitespace-nowrap">Registration Fee</th>
                  <th className="px-4 py-3 whitespace-nowrap">List Date</th>
                  <th className="px-4 py-3 whitespace-nowrap">Transfer</th>
                </tr>
              </thead>
              <tbody>
                {cardData.map((card, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{card.cardNo}</td>
                    <td className="px-4 py-3">{card.registrationFee}</td>
                    <td className="px-4 py-3">{card.listDate}</td>
                    <td className="px-4 py-3">{card.transfer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardList;
  