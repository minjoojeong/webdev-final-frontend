import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, description: "hello"}]

  let color = '';

  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {tasks.map((task) => {
        let color = 'black';
        switch (task.priority) {
          case 'High':
            color = 'red';
            break;
          case 'Medium':
            color = 'orange';
            break;
          case 'Low':
            color = 'blue';
            break;
          default:
            color = 'black';
            break;
        }
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`} style = {{color: color}}>
            <h1>{description}</h1>
          </Link>
          <button
           className = 'btndel'
           onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        );
      }
      )}
      <br/><br/>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
      <br/><br/>
      <Link to={`/`}>
        <button
         className = 'button-home'>Home</button>
      </Link>
    </div>
  );
};


export default AllTasksView;