import { FaCalendarAlt } from "react-icons/fa";

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
        <div className="taskText">{props.task.text}</div>

        <div className="tooltip">
          <FaCalendarAlt className="calendarIcon" />
          <span className="tooltiptext">
            <div className="dateStart">{"Added: " + props.task.date}</div>
            {!props.task.done ? <div className="dateDone">{"Done: " + props.task.doneDate}</div> : null}
            
          </span>
        </div>
        <button className="delButton" onClick={() => props.delete(props.id)}>
          X
        </button>
      </div>
    </>
  );
};

export default Task;
