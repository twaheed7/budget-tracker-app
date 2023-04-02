import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1324, name: "Shopping", cost: 50 },
    { id: 1324, name: "Holiday", cost: 150 },
    { id: 1324, name: "Transport", cost: 350 },
    { id: 1324, name: "Shopping", cost: 530 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList