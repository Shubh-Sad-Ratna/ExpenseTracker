import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
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
        console.log(userInput.enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredAmount: event.target.value
            };
        });
        console.log(userInput.enteredAmount);
    };

    const dateChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredDate: event.target.value
            };
        });
        console.log(userInput.enteredDate);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        id="title"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
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
