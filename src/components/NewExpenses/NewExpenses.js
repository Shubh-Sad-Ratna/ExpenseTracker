import React,{useState} from "react";
import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm";
const NewExpenses=(props)=>{
    const [edit,setEdit]=useState(false);
    const submitDataHandler=(data)=>{
        data={...data,id:Math.random().toString()}
        props.onSubmit(data);
    }
    return(
        <div className="new-expense"> 
            {edit===false && <button onClick={()=>{
                setEdit(true)
            }} type="button">Add Expense</button>}

            {edit===true && <ExpenseForm onSubmit={submitDataHandler} onCancel={()=>{
                setEdit(false);
            }}/>}
            
        </div>
    )
}
export default NewExpenses;