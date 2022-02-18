import Task from "./Task";

const TaskList = (props) => {
  const oneFiltered = props.tasks.filter((task) => task.status === "one");
  const twoFiltered = props.tasks.filter((task) => task.status === "two");
  const threeFiltered = props.tasks.filter((task) => task.status === "three");
  const fourFiltered = props.tasks.filter((task) => task.status === "four");

  const one = oneFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} delete={props.delete} taskDone={props.taskDone} />
  ));

  const two = twoFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} delete={props.delete} taskDone={props.taskDone} />
  ));

  const three = threeFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} delete={props.delete} taskDone={props.taskDone} />
  ));

  const four = fourFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} delete={props.delete} taskDone={props.taskDone} />
  ));

  return (
    <>
      <div className="one">
        <div className="headerOne">Important and Urgent</div>
        <div className="list">{one}</div>
      </div>
      <div className="two">
        <div className="headerTwo">Important and Not Urgent</div>
        <div className="list">{two}</div>
      </div>
      <div className="three">
        <div className="headerThree">Unimportant and Urgent</div>
        <div className="list">{three}</div>
      </div>
      <div className="four">
        <div className="headerFour">Unimportant and Not Urgent</div>
        <div className="list">{four}</div>
      </div>
    </>
  );
};

export default TaskList;
