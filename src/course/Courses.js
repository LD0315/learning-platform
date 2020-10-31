import React from 'react';
import{ Button, Container, Pagination, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { fetchCourses } from '../api/course';


class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            eroor: null,
            isLoading: false,
            pagination: {},
        };
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses = (pageNum, pageSize) => {
        this.setState({ isLoading: true, courses: []}, () => {
            fetchCourses(pageNum, pageSize)
            .then(this.updateCourseData)
            .then(error => this.setState({ error }));
        });
    }

   updateCourseData = courseData => {
       this.setState({
           courses: courseData.courses,
           isLoading: false,
           pagination: courseData.pagination,
       })
   }

   handlePageChange = (event, data) => {
       this.loadCourses(data.activePage);
   }

   render(){
       const currentPath = this.props.location.pathname;

       return (
           <React.Fragment>
               <ErrorMessage error={this.state.error} />
               <Header as="h2" textAlign="center">
                   Courses
               </Header>
               <Container>
                   <Button as={Link} to={`${currentPath}/new`} primary>
                       create new course
                   </Button>
                   <segment basic loading={this.state.isLoading}>
                   <FlexContainer justifyContentValue="space-between">
                       {this.state.courses.map(course => (
                           <CourseCard 
                                courseDescription={course.description}
                                courseImage={course.image}
                                courseName={course.name}
                                key={course.code}
                                to={`${COURSE_BASE_URL}/${course.code}`}
                             />
                       ))}
                   </FlexContainer>
                   </segment>

                  {
                      this.state.pagination.page && (
                          <FlexContainer justifyContentValue="center">
                              <Pagination
                                activePage={this.state.pagination.page}
                                disabled={this.state.isLoaing}
                                onPageChange={this.handlePageChange}
                                totalPages={this.state.pagination.pages}
                              />
                          </FlexContainer>
                      )
                  } 
               </Container>
           </React.Fragment>
       );
   }

};


/*
const Course = props => {
    return <div>
       courseView
        
    </div>;
    /*
    {CourseDetails.map(course => {
        <CourseCard course={course} />
    })}
    */
// };


export default Courses;