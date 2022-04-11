import React from "react";
import PropTypes from "prop-types";

export const Cards = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={props.image}
				className="card-img-top"
				alt="..."
				style={{ height: "18rem" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Cards.PropTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.string,
};
