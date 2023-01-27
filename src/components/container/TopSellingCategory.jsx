import React from "react";
import ReactApexChart from "react-apexcharts";

const TopSellingCategory = () => {
  // data for the sparklines that appear below header area
  var sparklineData = [47, 45, 54, 38, 56, 65];
  //  Chart Labels
  var labels = [
    "Shoes",
    "Jeans",
    "Accessories",
    "Eye Glasses",
    "T-shirts",
    "Outwear",
  ];
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
        enabled: false,
      },
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        autoSelected: "zoom",
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
      colors: ["#FF4560", "#3f51b5"],
    },
    fill: {
      colors: ["#FF4560", "#3f51b5"],
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FF4560", "#3f51b5"], // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100],
        colorStops: [],
      },
    },

    colors: ["#FF4560", "#3f51b5"],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: labels,
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
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    markers: {
      size: 0,
    },
  };

  var series = [
    {
      name: "Incomes",
      data: randomizeArray(sparklineData),
    },
    {
      name: "Expenses",
      data: randomizeArray(sparklineData),
    },
  ];
  return (
    <div className="h-auto bg-white rounded-md p-4 shadow-sm w-3/6 flex flex-col gap-5">
      <h5 className="font-thin text-slate-500">Top Selling Categories</h5>
      <div className="flex flex-col justify-center items-center">
        <ReactApexChart
          options={spark3}
          series={series}
          width="300"
          height="300"
          type="radar"
        />
      </div>
    </div>
  );
};

export default TopSellingCategory;
