import React from "react";
import { UilPlus, UilArrowUp } from "@iconscout/react-unicons";
import ReactApexChart from "react-apexcharts";
import SelectButton from "./SelectButton";

const SalesOverview = () => {
  // Chart Data
  var chartData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51];

  //  Chart Labels
  var labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //   Funtion to Randomize to Data on page reload

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

  var colorPalette = ["#FF4560", "#3f51b5"];
  var gradientToColors = ["#FF4560", "#3f51b5"];

  var options = {
    chart: {
      type: "area",
      height: 150,
      sparkline: {
        enabled: false,
      },
      zoom: {
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
      colors: colorPalette,
    },

    fill: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.9,
        gradientToColors: gradientToColors, // optional, if not defined - uses the shades of same color in series
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
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#FF4560", "#3f51b5"],
      },
    },
    markers: {
      colors: ["#FF4560", "#3f51b5"],
    },
    title: {
      text: "$80,630",
      offsetX: 30,
      style: {
        fontWeight: "400",
        fontSize: "24px",
        color: "black",
        fontFamily: "helvetica, san-serif",
        cssClass: "apexcharts-yaxis-title",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: ["#FF4560", "#3f51b5"],
  };

  var series = [
    {
      name: "Incomes",
      data: randomizeArray(chartData),
    },
    {
      name: "Expenses",
      data: randomizeArray(chartData),
    },
  ];

  return (
    <div className="min-h-[200px] bg-white rounded-md shadow-sm">
      <div className="flex justify-between items-center  p-4">
        <h3 className="font-semibold">Sales Overview</h3>
        <button className="flex gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-thin">
          <UilPlus className="h-5 w-5" />
          Add Offer
        </button>
      </div>
      <hr />
      <div id="chart" className="p-4 min-h-40 max-h-auto w-full relative">
        <div className="flex items-center justify-between w-full top-10">
          <div className="flex items-center gap-4 absolute top-3 left-[200px]">
            <span className="h-10 w-10 bg-emerald-100 rounded-full flex justify-center items-center">
              <UilArrowUp className="text-emerald-500" />
            </span>
            <span className="text-emerald-500">+6.7%</span>
          </div>
          <div className="absolute top-3 right-[350px] flex gap-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-blue-800 rounded-full "></span>
              <p className="text-slate-500 text-sm font-thin">Income</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-red-700 rounded-full "></span>
              <p className="text-slate-500 text-sm font-thin">Expenses</p>
            </div>
          </div>
          <div className="absolute top-3 right-[50px] z-10">
            <SelectButton />
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          width="100%"
          height="300"
          type="area"
        />
      </div>
    </div>
  );
};

export default SalesOverview;
