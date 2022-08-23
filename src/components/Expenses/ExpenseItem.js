import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// props is used to pass data from one component to another
const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);
   /*this is react hook and should be called inside the component functions and is used to change the state,
   basically update something if any button is clicked */

   const clickHandler = () => {
      setTitle("Updated"); /*State updating function */
      console.log(title);
   };

   return (
      <li>
         <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
               <h2>{title}</h2>
               <div className="expense-item__price">₹{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
         </Card>
      </li>
   );
};

export default ExpenseItem; // export is necessary, otherwise it will be only used inside of this file
