import Task from "./Task";

const TaskList = (props) => {
  const oneFiltered = props.tasks.filter((task) => task.status === "one");
  const twoFiltered = props.tasks.filter((task) => task.status === "two");
  const threeFiltered = props.tasks.filter((task) => task.status === "three");
  const fourFiltered = props.tasks.filter((task) => task.status === "four");

  const one = oneFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} />
  ));

  const two = twoFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} />
  ));

  const three = threeFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} />
  ));

  const four = fourFiltered.map((task) => (
    <Task key={task.id} id={task.id} task={task} />
  ));

  return (
    <>
      <div className="one">
        <div className="header">Important and Urgent</div>
        <ul>{one}</ul>
      </div>
      <div className="two">
        <ul>{two}</ul>
      </div>
      <div className="three">
        <ul>{three}</ul>
      </div>
      <div className="four">
        <ul>{four}</ul>
      </div>
    </>
  );
};

export default TaskList;
