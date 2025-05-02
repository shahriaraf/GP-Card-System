import React, { useState } from 'react';

const DateOfBirth = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div>
      <label className="block mb-1 text-gray-600 text-sm">
        Date of Birth <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-2">
        {/* Day Select */}
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* Month Select */}
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Month</option>
          {months.map((m, i) => (
            <option key={i} value={m}>{m}</option>
          ))}
        </select>

        {/* Year Select */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateOfBirth;
