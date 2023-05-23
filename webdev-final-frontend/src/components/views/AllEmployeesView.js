import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  let {employees, deleteEmployee} = props;
  //employees = [{id: 300, description: "hello"}]

  if (!employees.length) {
    return (
    <div>
      <p>There are no employees.</p>
      <Link to={`/newemployee`}>
        <button>Add New Employee</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {employees.map((employee) => {
        let description = employee.firstname.concat(" ", employee.lastname);
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{description}</h1>
          </Link>
            <button
             className='btndel'
             onClick={() => deleteEmployee(employee.id)}>Delete</button>    
          </div>
        );
      }
      )}
      <br/>
      <Link to={`/newemployee`}>
        <button>Add New Employee</button>
      </Link>
      <br/>
      <br/>
      <Link to={`/`}>
        <button
         className='button-home'>Home</button>
      </Link>
    </div>
  );
};


export default AllEmployeesView;