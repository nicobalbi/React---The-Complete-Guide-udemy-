import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const emptyForm = {
    title: '',
    amount: '',
    date: '',
  }

  const [userInput, setUserInput] = useState(emptyForm);

  const inputChangeHandler = e => {
    setUserInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = { ...userInput, amount: +userInput.amount, date: new Date(userInput.date) }
    props.onSaveExpenseData(expenseData);
    setUserInput(emptyForm);
  };
  
  const hideForm = () => {
    setUserInput(emptyForm);
    props.onShowForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={userInput.title} onChange={inputChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' name='amount' min='0.01' step='0.01' value={userInput.amount} onChange={inputChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' name='date' min='2019-01-01' max='2022-12-31' value={userInput.date} onChange={inputChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={hideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;