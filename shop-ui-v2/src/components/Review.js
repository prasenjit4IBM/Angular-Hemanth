import React from 'react';

const Review = (props) => {
    let { value: review } = props
    return (
        <div className="alert alert-info">
            <span className="badge badge-primary">{review.stars}</span>
            &mdash;
            <span>{review.author}</span>
            <hr />
            <div>{review.body}</div>
        </div>
    );
};

export default Review; 