import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import Jumbotron from "./jumbo";
import Card from "./card";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar/>
			<div className="container content">
				<Jumbotron/>
				<div className="d-flex justify-content-center">
					<div className="d-flex d-md-grid flex-column gap-4 w-100">
						<Card/>
						<Card/>
						<Card/>
						<Card/> 
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
