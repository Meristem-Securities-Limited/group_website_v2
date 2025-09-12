"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";

interface Stock {
  name: string;
  currentPrice: number;
  change: number;
}

type apiData = {
  id: string;
  companyName: string;
  price: string;
  todaysChangeP: string;
  logo: string | undefined;
  symbol: string;
};

const normalizeStocks = (apiData: Array<apiData>[]) => {
  const data = apiData[0] ?? [];
  return data.map((item) => ({
    id: item?.id,
    name: item.companyName,
    currentPrice: parseFloat(item.price),
    change: parseFloat(item.todaysChangeP),
    logo: item?.logo,
    symbol: item?.symbol,
  }));
};

const getPagination = (currentPage: number, totalPages: number): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    // Show all if few pages
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1); // always show first page

  // Show dots if needed before the middle section
  if (currentPage > 4) {
    pages.push("...");
  }

  // Middle 3 pages (center currentPage when possible)
  const start = Math.max(2, Math.min(currentPage - 1, totalPages - 4));
  const end = Math.min(totalPages - 1, start + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Show dots if needed after the middle section
  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  pages.push(totalPages); // always show last page

  return pages;
};

export default function MarketTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<string>("all");

  const { data: results, isLoading } = useSWR(
    ["/api/securities", activeTab],
    async ([url, filter]) => {
      const apiUrl = `${url}?type=${filter}`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error("Failed to fetch securities");
      }

      const data = await res.json();
      return normalizeStocks(data);
    }
  );

  const itemsPerPage = 7;

  const filteredData = useMemo(() => {
    const data = Array.isArray(results) ? results : [];
    return data.filter((stock) => stock?.name?.toLowerCase().includes(search.toLowerCase()));
  }, [results, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="w-full space-y-8 pb-14">
      {/* Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search for company"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full placeholder:text-sm px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Tabs */}
      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between">
        <h2 className="text-lg font-bold">Market update</h2>
        <div className="flex bg-gray-100 rounded-lg p-2 lg:w-[63%] w-full">
          {[
            { label: "All", value: "all" },
            { label: "Top Gainers", value: "gainers" },
            { label: "Top Losers", value: "losers" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setCurrentPage(1);
              }}
              className={`px-4 lg:w-auto w-full py-3 font-semibold lg:text-sm text-xs rounded-lg ${
                activeTab === tab.value
                  ? "border-2 border-green-800 text-green-950"
                  : "text-gray-700"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
        {isLoading ? (
          <div className="p-6 text-center font-semibold text-gray-600">Loading market data...</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm py-4">
                <th className="px-4 py-5 text-left">NAME</th>
                <th className="px-4 py-5 text-left">CURRENT PRICE</th>
                <th className="px-4 py-5 text-left">CHANGE (%)</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((stock: Stock, idx: number) => (
                <tr
                  key={idx}
                  className="font-medium text-sm py-4 text-gray-800 hover:bg-gray-50">
                  <td className="px-4 py-5 border-b border-gray-300">{stock.name}</td>
                  <td className="px-4 py-5 border-b border-gray-300">
                    ₦{stock.currentPrice.toFixed(2)}
                  </td>
                  <td
                    className={`px-4 py-5 font-medium border-b border-gray-300 ${
                      stock.change > 0 ? "text-green-600" : "text-red-600"
                    }`}>
                    {stock.change > 0 ? "+" : ""}
                    {stock.change.toFixed(2)}%
                  </td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-4 text-center text-gray-800 font-medium">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <div className="flex items-center justify-between gap-2 mt-4 font-semibold">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-5 py-3 rounded bg-green-800 text-white disabled:opacity-50">
            &lt;
          </button>

          <div className="space-x-2 flex items-center">
            {getPagination(currentPage, totalPages).map((item, idx) =>
              item === "..." ? (
                <span
                  key={`dots-${idx}`}
                  className="px-3 py-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={`page-${item}`}
                  onClick={() => setCurrentPage(item as number)}
                  className={`px-5 py-3 rounded text-sm ${
                    currentPage === item ? "bg-green-800 text-white" : "bg-gray-200 text-gray-700"
                  }`}>
                  {item}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-5 py-3 rounded bg-green-800 text-white disabled:opacity-50">
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
