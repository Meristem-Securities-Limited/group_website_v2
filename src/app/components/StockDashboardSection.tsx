"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import MarketTable from "./MarketTable";
import dayjs from "dayjs";
import useSWR from "swr";

type FormattedChartDataPoint = ChartDataPoint & {
  index: number;
  label: string;
};

type resultType = {
  id: string;
  name: string;
  currentPrice: number;
  change: number;
  logo: string | undefined;
  symbol: string;
  // todaysChangeP:string
};

type apiData = {
  id: string;
  companyName: string;
  price: string;
  todaysChangeP: string;
  logo: string | undefined;
  symbol: string;
};

type ChartDataPoint = {
  month: string;
  value: number;
};

const normalizeStocks = (apiData: Array<apiData>[]): resultType[] => {
  const data = Array.isArray(apiData[0]) ? apiData[0] : [];
  return data.map((item) => ({
    id: item?.id,
    name: item.companyName,
    currentPrice: parseFloat(item.price),
    change: parseFloat(item.todaysChangeP),
    logo: item?.logo,
    symbol: item?.symbol,
  }));
};

export default function StockDashboardSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCompany, setSelectedCompany] = useState<resultType>();
  const [formattedData, setFormattedData] = useState<FormattedChartDataPoint[]>([]);

  const { data: results, isLoading: isLoadingData } = useSWR("/api/securities", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return normalizeStocks(data);
  });

  const formatChartData = (rawData: ChartDataPoint[]): FormattedChartDataPoint[] => {
    const seenMonths = new Set<string>();

    return rawData.map((point, index) => {
      const dateObj = dayjs(point.month, ["YYYY-MM-DD", "YYYY-MM", "YYYYMMDD"]);

      const formattedDate = dateObj.isValid() ? dateObj.format("MMM DD") : "";
      const formattedYear = dateObj.isValid() ? dateObj.format("YYYY") : "";

      // Key only by year + month
      const monthKey = dateObj.isValid() ? dateObj.format("YYYY-MM") : "";

      const showLabel = dateObj.isValid() && !seenMonths.has(monthKey);
      if (showLabel) {
        seenMonths.add(monthKey);
      }

      return {
        ...point,
        index,
        label: showLabel ? formattedDate.split(" ")[0] : "",
        date: formattedDate,
        year: formattedYear,
      };
    });
  };

  const fetchChartData = useCallback(
    async (range: string) => {
      let startDate: string | null = null;

      switch (range) {
        case "1D":
          startDate = dayjs().subtract(1, "day").format("YYYY-MM-DD");
          break;
        case "1W":
          startDate = dayjs().subtract(7, "day").format("YYYY-MM-DD");
          break;
        case "1M":
          startDate = dayjs().subtract(1, "month").format("YYYY-MM-DD");
          break;
        case "6M":
          startDate = dayjs().subtract(6, "month").format("YYYY-MM-DD");
          break;
        case "all":
          startDate = dayjs().subtract(1, "year").format("YYYY-MM-DD");
          break;
        default:
          startDate = dayjs().subtract(5, "year").format("YYYY-MM-DD");
          break;
      }

      setIsLoading(true);

      try {
        const url = `/api/security?companyId=${selectedCompany?.id}&start_date=${startDate}`;
        const res = await fetch(url);
        const results: Array<number>[] = await res.json();
        const data = Array.isArray(results) ? results : [];

        const chartData: ChartDataPoint[] = data.map((entry) => {
          const timestamp = entry[0];
          const price = entry[entry.length - 3];
          const formattedDate = dayjs(timestamp).format("MMM D, YYYY");
          return { month: formattedDate, value: price };
        });

        setFormattedData(formatChartData(chartData));
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setFormattedData([]);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCompany?.id]
  );

  useEffect(() => {
    fetchChartData(activeTab);
  }, [activeTab, fetchChartData]);

  useEffect(() => {
    if (results && results?.length > 0) {
      setSelectedCompany(results[0]);
    }
  }, [results]);

  if (isLoadingData) {
    return <div className="font-bold text-center p-34">Loading Data...</div>;
  }

  return (
    <section className="relative z-20 bg-white text-black">
      <div className="lg:py-19 pt-10 container mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-14 items-stretch h-full">
          <div className="xl:w-[62%] w-full h-full">
            <h2 className="lg:text-5xl text-3xl font-semibold mb-9">NGX at a Glance</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {Array.isArray(results) &&
                results.map((company) => (
                  <div
                    key={company.id}
                    className={`flex items-center gap-3 px-3 lg:min-w-[30%] md:min-w-[40%] min-w-[60%] rounded-xl cursor-pointer bg-[#144D330D] ${
                      selectedCompany && selectedCompany?.id === company.id
                        ? "border-2 border-green-900"
                        : "hover:border-green-900"
                    }`}
                    onClick={() => setSelectedCompany(company)}>
                    {company.logo && (
                      <div className="lg:w-12 lg:h-12 w-10 h-10 relative">
                        <Image
                          src={company.logo}
                          priority
                          width={50}
                          height={50}
                          alt="company logo"
                          className="rounded-full w-full h-full object-cover bg-green-100"
                        />
                      </div>
                    )}
                    <div className="flex flex-col items-left py-4 flex-1">
                      <h3 className="font-bold md:text-sm text-xs truncate max-w-50">
                        {company?.name}
                      </h3>
                      <div className="flex justify-between items-center w-full mt-2">
                        <span className="lg:text-lg text-sm font-bold">
                          ₦{parseFloat(company?.currentPrice?.toFixed(2)).toLocaleString()}
                        </span>
                        <span
                          className={`lg:text-sm text-xs px-2 py-1 font-semibold rounded-full ${
                            company.change > 0 ? "text-[#04C144]" : "text-[#FF0000]"
                          }`}>
                          {company.change > 0 ? `▲` : `▼`} {Math.abs(company.change)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex-1 rounded-xl shadow mt-4 py-6 h-full">
              <div className="flex lg:flex-row flex-col gap-4 justify-between items-center px-6 mb-9 h-full">
                <h3 className="text-xl font-bold">
                  {selectedCompany && `${selectedCompany?.symbol} - ${selectedCompany?.name}`}
                </h3>
                <div className="flex bg-gray-100 rounded-lg p-1 space-x-3">
                  {["1D", "1W", "1M", "6M", "all"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-2 font-semibold text-sm rounded-lg ${
                        activeTab === tab ? "bg-green-800 text-white" : "text-gray-700"
                      }`}>
                      {tab === "all" ? "1Y" : tab.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              {isLoading ? (
                <div className="font-bold text-center p-34">Please wait. Loading data...</div>
              ) : (
                <div className="overflow-x-hidden relative min-h-[400px]">
                  {formattedData.length > 0 ? (
                    <ResponsiveContainer
                      width="100%"
                      height={400}>
                      <AreaChart
                        data={formattedData}
                        margin={{ top: 10, right: 15, left: 20, bottom: 0 }}>
                        <defs>
                          <linearGradient
                            id="lineFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1">
                            <stop
                              offset="5%"
                              stopColor="#16a34a"
                              stopOpacity={0.6}
                            />
                            <stop
                              offset="95%"
                              stopColor="#16a34a"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="index"
                          tickFormatter={(index) => formattedData[index]?.label || ""}
                          interval={0}
                          className="font-bold text-sm"
                        />
                        <YAxis
                          orientation="right"
                          domain={["dataMin - 12", "dataMax + 15"]}
                          tickFormatter={(value) => `₦${value.toFixed(2)}`}
                          className="font-bold text-sm"
                        />
                        <Tooltip
                          formatter={(value: number) =>
                            `₦${parseFloat(value.toFixed(2) ?? 0).toLocaleString()}`
                          }
                          labelFormatter={(label: number) =>
                            `Date: ${formattedData[label]?.month || ""}`
                          }
                          cursor={{ stroke: "#4ade80", strokeDasharray: "3 3" }}
                          contentStyle={{
                            borderRadius: "8px",
                            fontSize: "11px",
                            fontWeight: "bold",
                          }}
                          labelClassName="font-bold text-xs"
                        />
                        <Area
                          type="linear"
                          dataKey="value"
                          stroke="#16a34a"
                          fill="url(#lineFill)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="font-bold p-9 text-center">No Result</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <MarketTable />
          </div>
        </div>
      </div>
    </section>
  );
}
