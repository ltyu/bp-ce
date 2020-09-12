import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { calculateExpense, calculateSavings } from './calculations';

const EXPENSE_MIN = 1;
const EXPENSE_MAX = 30;
const INITIAL_EXPENSE_PCT = 15;
const DEFAULT_SALARY = 100000;

export default ({ userName }) => {
  const [ completed, setCompleted ] = useState(false);
  const [ expensePct, setExpensePct ] = useState(INITIAL_EXPENSE_PCT);
  const [ salary, setSalary ] = useState(DEFAULT_SALARY);
  const [ expense, setExpense ] = useState(calculateExpense(DEFAULT_SALARY, INITIAL_EXPENSE_PCT / 100));
  const [ savings, setSavings ] = useState(calculateSavings(DEFAULT_SALARY, INITIAL_EXPENSE_PCT / 100));

  const setExpenseAndSavings = (salary, expensePct) => {
    setExpense(calculateExpense(salary, expensePct / 100));
    setSavings(calculateSavings(salary, expensePct / 100));
  };

  const handleExpenseChange = event => {
    setExpensePct(event.target.value);
    setExpenseAndSavings(salary, event.target.value);
  };

  const handleSalaryValueChange = ({ floatValue }) => {
    setSalary(floatValue);
    setExpenseAndSavings(floatValue, expensePct);
  };

  const handleCompletePlanning = () => {
    setCompleted(true);
  };

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-sm">
          { completed ?
            <p>Thank you {userName}</p> :
            <p>Welcome to your monthly budget, {userName}</p>
          }
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm">

          { completed ?
            null :
            <input
              className="slider"
              type="range"
              min={EXPENSE_MIN}
              max={EXPENSE_MAX}
              value={expensePct}
              onChange={handleExpenseChange}>
            </input>
          }
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-8">
          Your Election
        </div>
        <div className="col-sm-4">
          {expensePct} %
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-8">
          Your Salary
        </div>
        <div className="col-sm-4">
          <NumberFormat
            value={salary}
            displayType={completed ? 'text' : 'input' }
            thousandSeparator=","
            decimalScale="2"
            prefix="$"
            allowNegative="false"
            onValueChange={handleSalaryValueChange}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-8">
          Your Expense
        </div>
        <div className="col-sm-4">
          <NumberFormat
            value={expense}
            displayType="text"
            thousandSeparator=","
            decimalScale="2"
            prefix="$"
            allowNegative="false"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-8">
          Your Savings
        </div>
        <div className="col-sm-4">
          <NumberFormat
            value={savings}
            displayType="text"
            thousandSeparator=","
            decimalScale="2"
            prefix="$"
            allowNegative="false"
          />
        </div>
      </div>

      <hr />
      <div>
        {
          completed ? null :
          <button className="btn btn-primary" onClick={handleCompletePlanning}>Save</button>
        }
      </div>
    </div>
  )
}
