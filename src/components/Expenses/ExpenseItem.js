import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React,{useState} from "react";

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);

  function buttonClickHandler(){
    setTitle("NEW TITLE");
    console.log("Button Clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change</button>
    </Card>
  );
}

export default ExpenseItem;
