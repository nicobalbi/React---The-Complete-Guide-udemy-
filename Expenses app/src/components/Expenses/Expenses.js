import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses({expenses}) {

  const [year, setYear] = useState('2022')

  const yearHandler = (newYear) => {
    setYear(newYear)
  }

  const filteredExp = expenses.filter(exp => exp.date.getFullYear() === Number(year))

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onYearChange={yearHandler} />
      <ExpensesChart expenses={filteredExp} />
      <ExpensesList expenses={filteredExp} />
    </Card>
  );
}

export default Expenses;