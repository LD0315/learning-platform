import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CourseView from '../course/CourseView';
import StudentView from '../student/StudentView';
import LectureView from '../lecture/LectureView';
import CourseDetails from '../course/CourseDetails';


const Routes = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/courses" />
        <Route exact path="/courses" component={CourseView} />
        <Route exact path="/courses/:courseId" component={CourseDetails} />
        <Route exact path="/students" component={StudentView} />
        <Route exact path="/lecturers" component={LectureView} />
      </Switch>
    )
};

export default Routes;