import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredAmount: event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredDate: event.target.value
            };
        });
    };

    const submitButtonHandler=(event)=>{
        event.preventDefault();
        const data={
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date:new Date(userInput.enteredDate)
        }
        //console.log(data);
        props.onSubmit(data);
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        })
    }

    return (
        <form onSubmit={submitButtonHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                        id="title"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        value={userInput.enteredAmount}
                        id="amount"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        min="2023-01-01"
                        max="2024-12-31"
                        id="date"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
