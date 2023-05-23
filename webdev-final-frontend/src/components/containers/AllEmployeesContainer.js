
/*
//OLD CODE

import { useEffect, Component } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchAllEmployeesThunk, deleteEmployeeThunk, addEmployeeThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";


function AllEmployeesContainer() {
  const allEmployees = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  //replaces componentDidMount
  useEffect(() => {
    dispatch(fetchAllEmployeesThunk());
  }, [dispatch]);

  return <AllEmployeesView allEmployees={allEmployees} />;
}

export default AllEmployeesContainer;
*/
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { 
  fetchAllEmployeesThunk, 
  deleteEmployeeThunk, 
  addEmployeeThunk 
} from "../../store/thunks";

import { AllEmployeesView } from "../views";

class AllEmployeesContainer extends Component {
    componentDidMount() {
      this.props.fetchAllEmployees();
    }
    render(){
        return(
            <div>
                <AllEmployeesView 
                  employees={this.props.allEmployees}
                  deleteEmployee={this.props.deleteEmployee}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
  };
};


export default connect(mapState, mapDispatch)(AllEmployeesContainer);
