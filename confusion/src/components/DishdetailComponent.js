import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        const renderComments = comments.map((comment) => {
            return (
                <li key={comment.id} className="list-unstyled">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, &nbsp;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {renderComments}
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    const selectedDish = props.dish;

    if (selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={selectedDish.comments} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


export default Dishdetail;