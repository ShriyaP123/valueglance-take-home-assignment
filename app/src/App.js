import React, { useEffect, useState } from "react";
import { fetchFinancialData } from "./services/api";
import Table from "./components/Table";
import Filters from "./components/Filter";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFinancialData();
      setData(result);
      setFilteredData(result); // Initially set filtered data to all fetched data
    };
    fetchData();
  }, []);

  // Handle filter changes
  const handleFilter = ({ dateRange, revenueRange, netIncomeRange }) => {
    const filtered = data.filter((row) => {
      const dateValid =
        (!dateRange.start || row.date >= dateRange.start) &&
        (!dateRange.end || row.date <= dateRange.end);
      const revenueValid =
        (!revenueRange.min || row.revenue >= revenueRange.min) &&
        (!revenueRange.max || row.revenue <= revenueRange.max);
      const netIncomeValid =
        (!netIncomeRange.min || row.netIncome >= netIncomeRange.min) &&
        (!netIncomeRange.max || row.netIncome <= netIncomeRange.max);

      return dateValid && revenueValid && netIncomeValid;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="bg-lavender-50 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-lavender-600 text-center mb-6">
        Financial Data Filtering App
      </h1>
      <div className="container mx-auto flex gap-6">
        {/* Filters Section */}
        <div className="w-1/3 bg-lavender-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-lavender-700">Filters</h2>
          <Filters onFilter={handleFilter} />
        </div>

        {/* Table Section */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-xl border border-lavender-200">
          <h2 className="text-2xl font-semibold text-lavender-700 mb-4">Financial Data</h2>
          <Table data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;
