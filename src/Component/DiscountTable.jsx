const DiscountTable = () => {
    const orgData = [
      { orgName: 'MediCare Ltd.', mobile: '01700000001', address: 'Dhaka', discount: '10%' },
      { orgName: 'HealthFirst', mobile: '01700000002', address: 'Chittagong', discount: '15%' },
      { orgName: 'CarePoint Clinic', mobile: '01700000003', address: 'Sylhet', discount: '12%' },
    ];
  
    return (
      <div className="w-full px-4 pt-30 sm:px-6 lg:px-12 py-10 bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Partner Organizations
        </h2>
  
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Desktop & Tablet Scrollable Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[600px] w-full text-left text-sm text-gray-700">
              <thead className="bg-blue-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">SL</th>
                  <th className="px-4 py-3 whitespace-nowrap">Organization Name</th>
                  <th className="px-4 py-3 whitespace-nowrap">Mobile No</th>
                  <th className="px-4 py-3 whitespace-nowrap">Address</th>
                  <th className="px-4 py-3 whitespace-nowrap">Discount</th>
                </tr>
              </thead>
              <tbody>
                {orgData.map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{row.orgName}</td>
                    <td className="px-4 py-3">{row.mobile}</td>
                    <td className="px-4 py-3">{row.address}</td>
                    <td className="px-4 py-3">{row.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default DiscountTable;
  