import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
/*
 *            received props from App.js  { onAddExpense }
 *                   ↓
 */
const NewExpense = (props) => {
  // itong "saveExpenseDataHandler function" na to ang mag babato papunta kay App.js (Lifting the state up)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //tinawag ang "onAddExpense props" na galing kay App.js at sa parameter nito nilagay ang nakalap nating data mula sa child component (ExpenseForm.js)
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
