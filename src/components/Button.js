const Button = (props) => {
  return (
    <button className={props.className} name={props.name} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
