import React, { Fragment } from "react";
import Topbar from "./Topbar";
import SalesOverview from "./SalesOverview";
import IncomeOverview from "./IncomeOverview";
import TopSellingCategory from "./TopSellingCategory";
import LatestProducts from "./LatestProducts";

const ContainerChildren = () => {
  return (
    <div className="rounded-tl-xl bg-slate-100 min-h-screen w-full p-4 flex flex-col gap-4">
      <Topbar />
      <SalesOverview />
      <IncomeOverview />
      <div className="flex gap-4 justify-between">
        <TopSellingCategory />
        <LatestProducts />
      </div>
    </div>
  );
};

export default ContainerChildren;
