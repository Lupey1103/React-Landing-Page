import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	return (
		<div className="jumbotron">
			<h1 className="display-4 ">{props.head}</h1>
			<p className="lead">{props.hero}</p>
			<hr className="my-4" />
			<p>{props.summary}</p>
			<div className="container">
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};

Jumbotron.PropTypes = {
	head: PropTypes.string,
	hero: PropTypes.string,
	summary: PropTypes.string,
	image: PropTypes.string,
};
