import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false)

  const showFormHandler = () => setShowForm(prevState => !prevState)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    showFormHandler()
  };

  return (
    <div className='new-expense'>
      {
        !showForm ? <button onClick={showFormHandler}>Add New Expense</button> :
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onShowForm={showFormHandler} />
      }
    </div>
  );
};

export default NewExpense;