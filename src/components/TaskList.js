import Task from "./Task";

const TaskList = (props) => {
  const oneFiltered = props.tasks.filter((task) => task.status === "doFirst");
  const twoFiltered = props.tasks.filter((task) => task.status === "schedule");
  const threeFiltered = props.tasks.filter((task) => task.status === "delegate");
  const fourFiltered = props.tasks.filter((task) => task.status === "dontDo");

  // const filterTask = (taskGroupName) => {
  //   return props.tasks.filter((task) => task.status === taskGroupName);
  // };

  // const doFirstFiltered = filterTask("doFirst");
  // const scheduleFiltered = filterTask("schedule");
  // const delegateFiltered = filterTask("delegate");
  // const dontDoFiltered = filterTask("dontDo");

  const oneNotDoneFiltered = oneFiltered.filter((task) => task.done === false);

  const one = oneNotDoneFiltered.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      taskDone={props.taskDone}
    />
  ));

  const oneDoneFiltered = oneFiltered.filter((task) => task.done === true);

  const oneDone = oneDoneFiltered.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      taskDone={props.taskDone}
    />
  ));

  const two = twoFiltered.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      taskDone={props.taskDone}
    />
  ));

  const three = threeFiltered.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      taskDone={props.taskDone}
    />
  ));

  const four = fourFiltered.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      task={task}
      delete={props.delete}
      taskDone={props.taskDone}
    />
  ));

  return (
    <>
      <div className="one">
        <div className="headerOne">Do First</div>
        <div className="list">{one}</div>
        <div className="oneDone">
          <div className="headerOne">Finished</div>
          <div className="list">{oneDone}</div>
        </div>
      </div>

      <div className="two">
        <div className="headerTwo">Schedule</div>
        <div className="list">{two}</div>
      </div>
      <div className="three">
        <div className="headerThree">Delegate</div>
        <div className="list">{three}</div>
      </div>
      <div className="four">
        <div className="headerFour">Don't do</div>
        <div className="list">{four}</div>
      </div>
    </>
  );
};

export default TaskList;
