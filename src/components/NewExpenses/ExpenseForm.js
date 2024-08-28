import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredPrice: "",
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

    const priceChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredPrice: event.target.value
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
            price:userInput.enteredPrice,
            date:new Date(userInput.enteredDate)
        }
        //console.log(data);
        props.onSubmit(data);
        setUserInput({
            enteredTitle: "",
            enteredPrice: "",
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
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        value={userInput.enteredPrice}
                        id="price"
                        onChange={priceChangeHandler}
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
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
