import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { isLoggedIn, removeToken } from '../utils/auth';
import './styles/topNav.scss';
// import styled from 'styled-components';

import {
    COURSE_BASE_URL,
    LECTURER_BASE_URL,
    LOGIN_URL,
    STUDENT_BASE_URL,
} from '../routes/URLMap';


const logout = history => {
    removeToken();
    history.push(LOGIN_URL);
};

const TopNav = ({ history }) => {

    if (!isLoggedIn()) return null;

    return (
        <nav className="nav-bar">
            <NavLink className="nav-item" activeClassName="nav-item-active" to={COURSE_BASE_URL}>
                Courses
            </NavLink>
            <NavLink className="nav-item" activeClassName="nav-item-active" to={STUDENT_BASE_URL}>
                Studnets
            </NavLink>
            <NavLink className="nav-item" activeClassName="nav-item-active" to={LECTURER_BASE_URL}>
                Lectures
            </NavLink>
            <Button onClick={() => logout(history)} className="nav-logout">
                Log out
            </Button>
        </nav>
    );
};

/*
const NavContainer = styled.ul`
      display: flex;
      list-style: none;

      a {
          text-decoration: none;
      }
`;
*/

// color: ${props => props.isRed && 'red'}
/*
const NavItem = styled(Link)`
      background-color: ${props => props.isActive  && 'blue'};
`
*/


/*
const TopNav = props => {
    console.log(props.match);
    /*
    const path = props.location.pathname;
    const isOnCourses = path === '/courses' ;
    const isOnStudents = path === '/students';
    const isOnLecturers = path === '/lecturers';
    */
   /*
    return (
        <nav>
            <NavContainer> 
                <li><NavLink activeStyle={{ backgroundColor: 'red' }} to="/courses" >Courses</NavLink></li>
                <li><NavLink activeStyle={{ backgroundColor: 'red' }} to="/students">Students</NavLink></li>
                <li><NavLink activeStyle={{ backgroundColor: 'red' }} to="/lecturers">Lecturers</NavLink></li>
                <button onClick = {() => props.history.push('/students')}>go to students</button>
            </NavContainer>
        </nav>
        /*
        <nav>
            <NavContainer>
                <li><NavItem isActive={isOnCourses} to="/courses">Courses</NavItem></li>
                <li><NavItem isActive={isOnStudents} to="/students">Students</NavItem></li>
                <li><NavItem isActive={isOnLecturers} to="/lecturers">Lecturers</NavItem></li>
            </NavContainer>
        </nav>
        */
   // );
//};



export default withRouter(TopNav);