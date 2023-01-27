import React from "react";
import DailyExpense from "./DailyExpense";
import DailyIncome from "./DailyIncome";
import WeeklyIncome from "./WeeklyIncome";
import WeeklyExpense from "./WeeklyExpense";
const IncomeOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <DailyIncome />
        <DailyExpense />
        <WeeklyIncome />
        <WeeklyExpense />
      </div>
    </div>
  );
};

export default IncomeOverview;
