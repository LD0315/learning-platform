import React from 'react';

import { withRouter } from 'react-router-dom';

const CourseDeatils = props => {
    const match = props.match;

    //console.log(match.params);

    return <div>
        this is course details page, course id: {match.params.courseId} 
    </div>;
};

export default withRouter(CourseDeatils);