import React from 'react';
import CourseInfo from './components/CourseInfo';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { fetchCourseById } from '../api/course';


class CourseDeatils extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {},
            error: null,
            isLoading: false,
        };
 }

 componentDidMount() {
     const courseId = this.props.match.params.id;
     this.loadCourse(courseId);
 }

 loadCourse = courseId => this.setState({ isLoading: true }, () => {
     fetchCourseById(courseId)
        .then(course => this.setState({ course, isLoading: false }))
        .catch(this.setErrorState);
 });

 setErrorState = error => this.setState({ error });

 render() {
     return (
         <React.Fragment>
             <ErrorMessage error={this.state.error} />
             <Header as="h2" textAlign="center">
                 Course Details
             </Header>
             <CourseInfo
                assignedLecturers={this.state.course.teachers}
                courseId={this.state.course.code}
                description={this.state.course.description}
                image={this.state.course.image}
                isLoading={this.state.isLoading}
                name={this.state.course.name}
                reloadPage={this.loadCourse}
                setErrorState={this.setErrorState}
                enrolledStudents={this.state.course.students}
                />
         </React.Fragment>
     );
 }
};

export default CourseDeatils;


// import { withRouter } from 'react-router-dom';




/*
const CourseDeatils = props => {
    const match = props.match;

    //console.log(match.params);

    return <div>
        this is course details page, course id: {match.params.courseId} 
    </div>;
};

export default withRouter(CourseDeatils);
*/