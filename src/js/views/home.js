import React from "react";
import { People } from "./People";
import { Planets } from "./Planets";
import "../../styles/home.scss";
import mars from "../../img/mars.png";
import clon from "../../img/clon.png";

export const Home = () => (
	<div className="container">
		<div className="character">
			<img src={clon} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Characters</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<People />
			</div>
		</div>
		<div className="planeta">
			<img src={mars} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Planets</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Planets />
			</div>
		</div>
	</div>
);
