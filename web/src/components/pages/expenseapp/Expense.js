import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import ExpenseChart from "./ExpenseChart";
import ExpenseBarChart from "./ExpenseBarChart";

export default function Expense() {
  const [expense, setExpense] = useState([]);

  const addExpense = (newExpense) => {
    const id = new Date().getTime().toString();
    const expenseWithId = { ...newExpense, id };
    setExpense([...expense, expenseWithId]);
  };

  return (
    <div
      className="container-fluid spacer layer3"
      style={{ margin: "0px" }}
      id="dark"
    >
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expense={expense} />
      <ExpenseChart expense={expense} />
      <ExpenseBarChart expense={expense} />
    </div>
  );
}
