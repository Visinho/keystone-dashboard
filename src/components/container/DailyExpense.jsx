import React from "react";
import ReactApexChart from "react-apexcharts";

const DailyExpense = () => {
  // var colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];
  var colorPalette = ["#FF4560", "#3f51b5"];
  var gradientToColors = ["#FF4560", "#3f51b5"];

  // data for the sparklines that appear below header area
  var sparklineData = [47, 45, 54, 38, 56, 24, 65];

  var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  var spark3 = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
      colors: ["#FF4560"],
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        columnGap: "10",
      },
    },
    fill: {
      colors: ["#FF4560"],
      type: "solid",
    },

    // colors: ["#FF4560"],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "";
        },
      },
    },
  };

  var series = [
    {
      name: "Profits",
      data: randomizeArray(sparklineData),
    },
  ];
  return (
    <div className="max-h-auto bg-white rounded-md  p-4 shadow-sm w-full">
      <h5 className="font-thin text-slate-500">Daily Expense</h5>
      <div className="flex justify-between items-center gap-4">
        <h6 className="text-xl font-semibold">$380</h6>
        <ReactApexChart
          options={spark3}
          series={series}
          width="50%"
          height="50%"
          type="bar"
        />
      </div>
    </div>
  );
};

export default DailyExpense;
