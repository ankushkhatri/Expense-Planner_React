import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredAmount, setEnteredAmount] = useState("");
   const [enteredDate, setEnteredDate] = useState("");

   /************************************************************** */
   // Alternative Approach
   /*This is multi state concept, we can call this as well but we can just this in one state as well like below*/
   //   const [userInput, setUserInput] = useState({
   //     enteredTitle: "",
   //     enteredAmount: "",
   //     enteredDate: "",
   //   });

   /************************************************************** */

   const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);

      // Alternative Approach
      /************************************************************** */
      // setUserInput({
      //   ...userInput /*So that other values aren't thrown away, but are also part of new state */,
      //   enteredTitle: event.target.value,
      // });
      /************************************************************** */
      // setUserInput((prevState) => {
      //     return { ...prevState, enteredTitle: event.target.value };
      // });
      /*This is to ensure to always use latest state snapshot, in most of the cases both methods will work */
   };

   const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
   };

   const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredDate: event.target.value,
      // });
   };

   const submitHandler = (event) => {
      event.preventDefault(); // JS built in function

      const expenseDate = {
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseDate); // this function was defined in the child component and we are executing it here
      setEnteredAmount(""); // To clear the input fields once the add expense is pressed
      setEnteredTitle("");
      setEnteredDate("");
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
               />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
               />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
               Cancel
            </button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
