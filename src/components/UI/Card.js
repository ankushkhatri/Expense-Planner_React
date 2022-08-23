import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  /*Any value set to classname props is added to this string which is finally set to classes const */

  return <div className={classes}>{props.children}</div>;
  /*Because we can't use hmtl under custom component, 
  thats why this built in children props is used in react,
   to display all the data under that custom component */
}

export default Card;
