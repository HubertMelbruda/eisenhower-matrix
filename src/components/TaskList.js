import Task from "./Task";

const TaskList = (props) => {
  const filterTask = (taskGroupName) => {
    return props.tasks.filter((task) => task.status === taskGroupName);
  };

  const doFirstFiltered = filterTask("doFirst");
  const scheduleFiltered = filterTask("schedule");
  const delegateFiltered = filterTask("delegate");
  const dontDoFiltered = filterTask("dontDo");

  const mapTasks = (tasks) => {
    return tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        task={task}
        delete={props.delete}
        taskDone={props.taskDone}
      />
    ));
  };

  const doneTasks = (tasks) => {
    return tasks.filter((task) => task.done);
  };

  const notDoneTasks = (tasks) => {
    return tasks.filter((task) => !task.done);
  };

  const doFirstDone = mapTasks(doneTasks(doFirstFiltered));
  const doFirstNotDone = mapTasks(notDoneTasks(doFirstFiltered));

  const scheduleDone = mapTasks(doneTasks(scheduleFiltered));
  const scheduleNotDone = mapTasks(notDoneTasks(scheduleFiltered));

  const delegateDone = mapTasks(doneTasks(delegateFiltered));
  const delegateNotDone = mapTasks(notDoneTasks(delegateFiltered));

  const dontDoDone = mapTasks(doneTasks(dontDoFiltered));
  const dontDoNotDone = mapTasks(notDoneTasks(dontDoFiltered));

  return (
    <>
      <div className="doFirst">
        <div className="headerDoFirst">Do First</div>
        <div>{doFirstDone}</div>
        <div>
          {doFirstNotDone.length > 0 ? (
            <div className="headerDoFirst">Finished</div>
          ) : null}
          <div>{doFirstNotDone}</div>
        </div>
      </div>

      <div className="schedule">
        <div className="headerSchedule">Schedule</div>
        <div>{scheduleDone}</div>
        <div>
          {scheduleNotDone.length > 0 ? (
            <div className="headerSchedule">Finished</div>
          ) : null}
          <div>{scheduleNotDone}</div>
        </div>
      </div>
      <div className="delegate">
        <div className="headerDelegate">Delegate</div>
        <div>{delegateDone}</div>
        <div>
          {delegateNotDone.length > 0 ? (
            <div className="headerDelegate">Finished</div>
          ) : null}
          <div>{delegateNotDone}</div>
        </div>
      </div>
      <div className="dontDo">
        <div className="headerDontDo">Don't do</div>
        <div>{dontDoDone}</div>
        <div>
          {dontDoNotDone.length > 0 ? (
            <div className="headerDontDo">Finished</div>
          ) : null}
          <div>{dontDoNotDone}</div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
