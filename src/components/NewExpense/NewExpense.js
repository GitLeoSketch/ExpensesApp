import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [state, setState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,

      id: Math.random().toString(),
    };

    props.onExpenseHandler(expenseData);
  };

  const stopEditingHandler = () => {
    setState(false);
  };

  const newExpenseClickHandler = (event) => {
    setState(true);
  };

  return (
    <div className="new-expense">
      {!state && (
        <button onClick={newExpenseClickHandler}>Add New Expense</button>
      )}
      {state && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
