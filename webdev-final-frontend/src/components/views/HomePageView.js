

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (

    <div>
      <h2>WebDev Final Project</h2>
      <h3>Min Joo Jeong</h3>
      <div className = "row">
        <Link to={'/employees'}>
          <h5>All Employees</h5>
        </Link>
        <Link to={'/tasks'}>
          <h5>All Tasks</h5>
        </Link>
      </div>
      
    </div>
  );    
}


export default HomePageView;
