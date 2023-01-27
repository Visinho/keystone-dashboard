import React from "react";
import ReactApexChart from "react-apexcharts";

const WeeklyIncome = () => {
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
      colors: ["#03a9f4"],
    },
    fill: {
      colors: ["#03a9f4"],
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFFFFF"], // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [],
      },
      pattern: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWidth: 2,
      },
    },

    colors: ["#FFFFFF"],
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
    <div className="max-h-auto bg-white rounded-md p-4 shadow-sm w-full">
      <h5 className="font-thin text-slate-500">Weekly Income</h5>
      <div className="flex items-center gap-4">
        <h6 className="text-xl font-semibold">$5380</h6>
        <ReactApexChart
          options={spark3}
          series={series}
          width="100%"
          height="50%"
          type="area"
        />
      </div>
    </div>
  );
};

export default WeeklyIncome;