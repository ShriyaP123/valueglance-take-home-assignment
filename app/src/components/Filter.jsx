import React, { useState } from "react";

const Filters = ({ onFilter }) => {
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [revenueRange, setRevenueRange] = useState({ min: "", max: "" });
    const [netIncomeRange, setNetIncomeRange] = useState({ min: "", max: "" });

    // Handle filtering logic
    const handleFilterChange = () => {
        onFilter({ dateRange, revenueRange, netIncomeRange });
    };

    return (
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-700">Filters</h2>

            {/* Date Range Filter */}
            <div className="flex gap-6">
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        value={dateRange.start}
                        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        value={dateRange.end}
                        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Revenue Range Filter */}
            <div className="flex gap-6">
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Min Revenue</label>
                    <input
                        type="number"
                        value={revenueRange.min}
                        onChange={(e) => setRevenueRange({ ...revenueRange, min: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Max Revenue</label>
                    <input
                        type="number"
                        value={revenueRange.max}
                        onChange={(e) => setRevenueRange({ ...revenueRange, max: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Net Income Range Filter */}
            <div className="flex gap-6">
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Min Net Income</label>
                    <input
                        type="number"
                        value={netIncomeRange.min}
                        onChange={(e) => setNetIncomeRange({ ...netIncomeRange, min: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Max Net Income</label>
                    <input
                        type="number"
                        value={netIncomeRange.max}
                        onChange={(e) => setNetIncomeRange({ ...netIncomeRange, max: e.target.value })}
                        className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <button
                onClick={handleFilterChange}
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 mt-4"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default Filters;
