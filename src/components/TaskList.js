import Task from "./Task";

const TaskList = (props) => {
  const filterTasks = (taskGroup) => {
    return props.tasks.filter((task) => task.status === taskGroup);
  }

  const firstFiltered = filterTasks("one"); 
  const secondFiltered = filterTasks("two"); 
  const thirdFiltered = filterTasks("three");
  const fourthFiltered = filterTasks("four");
  
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
  }

  const doneTasks = (tasks) => {
    return tasks.filter((task) => task.done);
  };

  const notDoneTasks = (tasks) => {
    return tasks.filter((task) => !task.done);
  }

  const groups = [
    {
      name: "one",
      headerName: "headerOne",
      tasks: mapTasks(notDoneTasks(firstFiltered)),
      doneTasks: mapTasks(doneTasks(firstFiltered)),
      text: "Important and urgent",
      doneClassName: "oneDone",
    },
    {
      name: "two",
      headerName: "headerTwo",
      tasks: mapTasks(notDoneTasks(secondFiltered)),
      doneTasks: mapTasks(doneTasks(secondFiltered)),
      text: "Lorem ipsum",
      doneClassName: "twoDone",
    },
    {
      name: "three",
      headerName: "headerThree",
      tasks: mapTasks(notDoneTasks(thirdFiltered)),
      doneTasks: mapTasks(doneTasks(thirdFiltered)),
      text: "Dolor sit amet",
      doneClassName: "threeDone",
    },
    {
      name: "four",
      headerName: "headerFour",
      tasks: mapTasks(notDoneTasks(fourthFiltered)),
      doneTasks: mapTasks(doneTasks(fourthFiltered)),
      text: "Adepiscent elit",
      doneClassName: "fourDone",
    },
  ]

  const renderGroups = (groups) => {
    return groups.map(group => {
      return (
        // TODO: Change to separate component TaskGroup
        <div key={group.name} className={group.name}>
          <div className={group.headerName}>{group.text}</div>
          <div className="list">{group.tasks}</div>
          <div className={group.doneClassName}>
            <div className={group.headerName}>Finished</div>
            <div className="list">{group.doneTasks}</div>
          </div>
        </div>
      )
    });
  }

  return (
    <>
      {renderGroups(groups)}
    </>
  );
};

export default TaskList;
