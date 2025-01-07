// src/services/api.js
export const fetchFinancialData = async () => {
    const API_KEY = '5KhVPugt0SOQUxVspt8bHQiZZKE4HNKd';
    const URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`;

    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
