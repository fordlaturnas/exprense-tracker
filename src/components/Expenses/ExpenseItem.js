import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
/*
 *            received props from ShowExpenses.js
 *                      ↓
 */
const ExpenseItem = (props) => {
  const [upateItem, setUpdateItem] = useState(props.pangalangNgBiniliMo);
  // console.log('ExpenseItem evaluted by React');

  const consoleHandle = () => {
    setUpdateItem('Updated');
    // console.log('onClick triggered');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate petsa={props.petsaNgPagbili} />{' '}
      {/* passing props named "petsa" to ExpenseDate.js */}
      <div className="expense-item__description">
        <h2>{upateItem}</h2>
        <div className="expense-item__price">{props.presyoNgBiniliMo}</div>
      </div>
      <button onClick={consoleHandle}>click me to console.log</button>
    </Card>
  );
};

export default ExpenseItem;
