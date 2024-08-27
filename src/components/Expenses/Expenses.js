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

  let expenseContent;
  if(filteredExpenses.length===0){
    expenseContent=<p style={{color:"white"}}>No content is Present</p>;
  }
  
  if(filteredExpenses.length>0){
    expenseContent=filteredExpenses.map((expense) => {
      return(
        <>
        {filteredExpenses.length===1&&<p style={{color:"white"}}>Only one expense here. Please add more</p>}
        <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.price}
        />
      </>
      )
    })
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={changeFilterHandler}/>
      {expenseContent}
    </Card>
  );
}

export default Expenses;