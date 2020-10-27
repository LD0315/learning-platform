import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './topNav.scss';
import styled from 'styled-components';

const NavContainer = styled.ul`
      display: flex;
      list-style: none;

      a {
          text-decoration: none;
      }
`;
// color: ${props => props.isRed && 'red'}
/*
const NavItem = styled(Link)`
      background-color: ${props => props.isActive  && 'blue'};
`
*/

const TopNav = props => {
    console.log(props.match);
    /*
    const path = props.location.pathname;
    const isOnCourses = path === '/courses' ;
    const isOnStudents = path === '/students';
    const isOnLecturers = path === '/lecturers';
    */
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
    );
};

export default withRouter(TopNav);