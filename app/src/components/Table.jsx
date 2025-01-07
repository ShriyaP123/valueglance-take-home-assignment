import React, { useState } from "react";

const Table = ({ data }) => {
    const [sortConfig, setSortConfig] = useState({
        key: null, // Initially, no sorting applied
        direction: "ascending", // Default sorting direction
    });

    const sortedData = [...data].sort((a, b) => {
        if (!sortConfig.key) return 0; // If no sort key, do not sort

        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (sortConfig.key === "date") {
            const dateA = new Date(valueA);
            const dateB = new Date(valueB);
            return sortConfig.direction === "ascending" ? dateA - dateB : dateB - dateA;
        }

        if (typeof valueA === "number" && typeof valueB === "number") {
            return sortConfig.direction === "ascending" ? valueA - valueB : valueB - valueA;
        }

        return 0;
    });

    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === "ascending" ? "descending" : "ascending",
        }));
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "↑" : "↓";
        }
        return "↕"; // Default icon for unsorted columns
    };

    return (
        <div className="overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-300">
            <table className="min-w-full table-auto">
                <thead className="bg-indigo-600 text-white">
                    <tr>
                        <th
                            className="px-6 py-3 text-left text-sm font-semibold cursor-pointer"
                            onClick={() => handleSort("date")}
                        >
                            Date <span className="ml-1">{getSortIcon("date")}</span>
                        </th>
                        <th
                            className="px-6 py-3 text-left text-sm font-semibold cursor-pointer"
                            onClick={() => handleSort("revenue")}
                        >
                            Revenue <span className="ml-1">{getSortIcon("revenue")}</span>
                        </th>
                        <th
                            className="px-6 py-3 text-left text-sm font-semibold cursor-pointer"
                            onClick={() => handleSort("netIncome")}
                        >
                            Net Income <span className="ml-1">{getSortIcon("netIncome")}</span>
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Gross Profit</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">EPS</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Operating Income</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {sortedData.length > 0 ? (
                        sortedData.map((row, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-indigo-50 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }`}
                            >
                                <td className="px-6 py-4 text-sm text-gray-700">{row.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {row.revenue.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {row.netIncome.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {row.grossProfit.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{row.eps.toFixed(2)}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {row.operatingIncome.toLocaleString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
