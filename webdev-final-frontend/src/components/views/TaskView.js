import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;

  return (
    <div>
      <h1>{task.description}</h1>
      <h3>Priority: {task.priority}</h3>
      <h3>Completion:</h3>
      {task.isComplete ? 'Complete' : 'Incomplete'}
      {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3>unassigned</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
      <br/>
      <Link to={`/`}>
        <button
         className = 'button-home'>Home</button>
      </Link>
    </div>
  );

};

export default TaskView;