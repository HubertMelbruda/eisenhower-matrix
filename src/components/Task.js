const Task = (props) => {
  return (
    <>
      <div className="task">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={props.done}
          onChange={() => props.taskDone(props.id)}
        />
        {props.task.text}
        <div className="date">{props.task.date}</div>
        <button className="delButton" onClick={() => props.delete(props.id)}>X</button>
      </div>
    </>
  );
};

export default Task;
