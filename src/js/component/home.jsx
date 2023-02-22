import React from "react";
import {Navbar} from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";


//create your first component
const jumboArray = [
	{
		head: "Sonic Adventure 3!",
		hero: "When will Sega give Sonic fans the game they have been waiting for?",
		summary:
			"Will my Fanmade game open Segas eyes on continuing one of the best storylines in Sonic history?",
	},
];

const cardArray = [
	{
		title: "Sonic Adventure DX",
		text: "The game that paved the way for 3D Sonic games",
		image: "https://m.media-amazon.com/images/M/MV5BNTQ5MGE3OGItZjIwMC00MjQzLTliYTItMzZlYjJiNmFhY2RkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
	},
	{
		title: "Sonic Adventure 2 Battle",
		text: "The most favored Sonic game known to date where fans kept asking for more Adventure titles. Set the standards for 3D Sonic games since.",
		image: "https://upload.wikimedia.org/wikipedia/en/9/99/Sonic_Adventure_2_cover.png",
	},
	{
		title: "Shadow the Hedgehog",
		text: "After SA2 released, Shadow the Hedgehog (one of the games antagonists) became a huge fan favorite character then Sega had to ressurect the character and hand him a spin-off game.",
		image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Shadow_the_Hedgehog_Coverart.png",
	},
	{
		title: "Sonic Heroes",
		text: "The last Sonic game that was beloved by the fans, had a different approuch not only to the design but the mechanics and story.",
		image: "https://upload.wikimedia.org/wikipedia/en/4/48/Sonic_Heroes_cover.png",
	},
];

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div>
					{jumboArray.map((element, index) => {
						return (
							<div key={index}>
								<Jumbotron
									head={element.head}
									hero={element.hero}
									summary={element.summary}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container">
				<div className="row">
					{cardArray.map((element, index) => {
						return (
							<div className="col-3" key={index}>
								<Cards
									title={element.title}
									text={element.text}
									image={element.image}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
