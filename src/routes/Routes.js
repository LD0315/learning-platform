import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Courses from '../course/Courses';
import Students from '../student/Students';
import Lectures from '../lecture/Lectures';
import CourseDetails from '../course/CourseDetails';
import CourseEdit from '../course/CourseEdit';
import CourseNew from '../course/CourseNew';
import Login from '../login/Login'; 
import ProtectedRoute from './components /ProtectedRoute';

import {
  COURSE_BASE_URL,
  LECTURER_BASE_URL,
  LOGIN_URL,
  STUDENT_BASE_URL,
} from './URLMap';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={COURSE_BASE_URL} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/courses" component={Courses} />
      <ProtectedRoute exct path={`${COURSE_BASE_URL}/new`} component={CourseNew} />
      <ProtectedRoute exact path={`${COURSE_BASE_URL}/:id`} component={CourseDetails} />
      <ProtectedRoute exact path={`${COURSE_BASE_URL}/:id/edit`} component={CourseEdit} />
      <ProtectedRoute exact path={STUDENT_BASE_URL} component={Students} />
      <ProtectedRoute exact path={LECTURER_BASE_URL} component={Lectures} />
    </Switch>
  )
}
/*
const Routes = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/courses" />
        <Route exact path="/courses" component={CourseView} />
        <Route exact path="/courses/:courseId" component={CourseDetails} />
        <Route exact path="/students" component={StudentView} />
        <Route exact path="/lecturers" component={LectureView} />
        <Route exact path="/login" component={Login} />
      </Switch>
    )
};
*/

export default Routes;