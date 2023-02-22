import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Sonic Edge
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNav"
					style={{ display: "flex", justifyContent: "flex-end" }}>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Chaos Emeralds
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Lore
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Characters</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

