import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Budget Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
    </div>
  );
};

export default App;
