import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";

const colors = [
  "#FB8500", "#E63946", "#EC9A9A", "#A8DADC", "#8E44AD",
  "#F1FAEE", "#1D3557", "#457B9D", "#3498DB", "#FFB703", "#2ECC71",
];

const AccsessesKyfiatMabar = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("./data/kyfiat_mabar.xlsx")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const rawData = jsonData.filter(
          (row) =>
            row.condition &&
            row.FREQUENCY &&
            !isNaN(parseFloat(row.condition)) &&
            !isNaN(parseFloat(row.FREQUENCY))
        );

        const maxCondition = Math.max(...rawData.map((row) => parseFloat(row.condition)));

        const binnedData = rawData.map((row) => {
          const normalized = (parseFloat(row.condition) / maxCondition) * 10;
          const bin = Math.min(10, Math.floor(normalized));
          return {
            bin: bin,
            frequency: parseFloat(row.FREQUENCY),
          };
        });

        const frequencyByBin = Array.from({ length: 11 }, (_, i) => ({
          bin: i.toString(),
          frequency: 0,
        }));

        binnedData.forEach(({ bin, frequency }) => {
          frequencyByBin[parseInt(bin)].frequency += frequency;
        });

        const finalData = frequencyByBin.map((item, i) => ({
          ...item,
          color: colors[i % colors.length],
        }));

        setChartData(finalData);
      });
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-200 font-modam text-lg"
         style={{ width: "100%", height: "300px", padding: "2rem", fontFamily: "Modam" }}>
      <h2 className="text-base"
          style={{ textAlign: "center", color: "#4F7C6B", fontWeight: "bold" }}>
        نمودار کیفیت معابر محله
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <XAxis
           
            type="number"
            domain={[0, 10]}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            dataKey="bin"
          />
          <YAxis type="number" label={{ value: "تعداد معبر", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend content={() => (
            <div className="w-full text-center mt-2">
              <span className="text-base text-gray-700">امتیاز معبر</span>
            </div>
          )} />
          <Bar dataKey="frequency" name="کیفیت معبر">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccsessesKyfiatMabar;
