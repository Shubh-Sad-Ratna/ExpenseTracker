import React from "react";
import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm";
const NewExpenses=(props)=>{
    const submitDataHandler=(data)=>{
        data={...data,id:Math.random().toString()}
        props.onSubmit(data);
    }
    return(
        <div className="new-expense"> 
            <ExpenseForm onSubmit={submitDataHandler}/>
        </div>
    )
}
export default NewExpenses;