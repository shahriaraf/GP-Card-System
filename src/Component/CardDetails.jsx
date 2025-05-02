import { useState } from "react";

const CardDetails = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [gpNumbers, setGpNumbers] = useState([]);
  const [cardPrice, setCardPrice] = useState("");

  const cardOptions = {
    "Gold Card": { price: "1100 BDT", numbers: ["01792364643", "01386454567", "01398432573", "01781273412", "01729652545"] },
    "Silver Card": { price: "750 BDT", numbers: ["01785723444", "01732746545", "01393847553", "01398346534"] },
    "Platinum Card": { price: "1500 BDT", numbers: ["01376435654", "01363545374", "01773645565", "01775634534"] },
  };

  const handleCardSelect = (e) => {
    const card = e.target.value;
    setSelectedCard(card);
    setGpNumbers(cardOptions[card]?.numbers || []);
    setSelectedNumber("");
    setCardPrice(cardOptions[card]?.price || "");
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handlePay = () => {
    alert(`Paying ${cardPrice} for ${selectedCard} - ${selectedNumber}`);
    // Add your actual payment logic here
  };

  return (
    <div className="mt-3">
      {/* Select Card */}
      <div className="mb-6">
        <label className="block mb-1 text-sm text-gray-600">
          Select Card <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={selectedCard}
          onChange={handleCardSelect}
        >
          <option value="">-- Select a Card --</option>
          {Object.keys(cardOptions).map((card) => (
            <option key={card} value={card}>
              {card}
            </option>
          ))}
        </select>
      </div>

      {/* GP Numbers */}
      {gpNumbers.length > 0 && (
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">
            Select GP Number <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-4">
            {gpNumbers.map((number) => (
              <label
                key={number}
                className={`px-4 py-2 border rounded-md cursor-pointer transition ${
                  selectedNumber === number
                    ? "bg-blue-100 border-blue-500 text-blue-700 font-semibold"
                    : selectedNumber
                    ? "opacity-50 cursor-not-allowed border-gray-300"
                    : "hover:bg-blue-50 border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedNumber === number}
                  onChange={() => handleNumberSelect(number)}
                  disabled={selectedNumber && selectedNumber !== number}
                  className="hidden"
                />
                {number}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price & Pay Button */}
      {selectedNumber && (
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700 font-medium">Card Price</label>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={cardPrice}
              disabled
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
            />
            <button
              onClick={handlePay}
              className="px-6 py-2 bg-[#20ADF8] text-white rounded-md hover:bg-[#199fd8] transition"
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
