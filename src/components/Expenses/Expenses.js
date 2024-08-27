import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter';
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState("all");
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses=props.expenses.filter((expense)=>{
    if(filteredYear==="all"){
      return expense;
    }
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler}/>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
}

export default Expenses;