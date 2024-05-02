import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface ChartProps {
  data: number[];
  labels: string[];
}

const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  var barColors = [
    "#00AFF9",
    "#514FC0",
    "#00E27B",
    "#FF6942",
    "#678AB9",
    "#D968F6",
    "#00E0CA",
    "#FF494A"
  ];
  useEffect(() => {
    let myChart: Chart | null = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (myChart) {
          (myChart as Chart).destroy();
        }
        myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Điểm chuẩn",
                data: data,
                backgroundColor: barColors,
                barPercentage: 100,
                barThickness: 35,
                maxBarThickness: 35
              }
            ]
          }
        });
      }
    }

    return () => {
      if (myChart) {
        (myChart as Chart).destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
