import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
/*
 *            received props from App.js
 *                   ↓
 */
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    console.log('Expense.js');
    console.log(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          pangalangNgBiniliMo={props.item[0].title}
          presyoNgBiniliMo={props.item[0].amount}
          petsaNgPagbili={props.item[0].date}
        />
        <ExpenseItem
          pangalangNgBiniliMo={props.item[1].title}
          presyoNgBiniliMo={props.item[1].amount}
          petsaNgPagbili={props.item[1].date}
        />
        <ExpenseItem
          pangalangNgBiniliMo={props.item[2].title}
          presyoNgBiniliMo={props.item[2].amount}
          petsaNgPagbili={props.item[2].date}
        />
        <ExpenseItem
          pangalangNgBiniliMo={props.item[3].title}
          presyoNgBiniliMo={props.item[3].amount}
          petsaNgPagbili={props.item[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

/*

    <ExpenseItem
        pangalangNgBiniliMo={props.item[0].title}      // passing props named "pangalangNgBiniliMo" to ExpenseItem.js
        presyoNgBiniliMo={props.item[0].amount}      // passing props named "presyoNgBiniliMo" to ExpenseItem.js
        petsaNgPagbili={props.item[0].date}      // passing props named "petsaNgPagbili" to ExpenseItem.js              
        /> 
    
 * 
 */
