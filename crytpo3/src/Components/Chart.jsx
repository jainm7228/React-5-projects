import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [1, 2, 3, 4];
  const date = ["12/2/18", "1/2/23", "2/23/43 "];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};

export default Chart;
