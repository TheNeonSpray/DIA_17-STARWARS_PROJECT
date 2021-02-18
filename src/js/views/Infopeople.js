import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Infopeople = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-transparent">
			<div className="row">
				<div className="col-6">
					<img src="https://cdn.dribbble.com/users/130603/screenshots/2295709/swamp_800x600_4.gif" />
				</div>
				<div className="col-6 text-center">
					<h1 className="display-4">{store.people[params.theid].name}</h1>
					<p>A person within the Star Wars universe</p>
				</div>
			</div>
			<hr className="my-4 bg-warning" />
			<div className="row">
				<div className="col-2 text-center">
					<h2>Name</h2>
					<p>{store.people[params.theid].name}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Birth Year</h2>
					<p>{store.people[params.theid].birthYear}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Gender</h2>
					<p>{store.people[params.theid].gender}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Height</h2>
					<p>{store.people[params.theid].height}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Skin Color</h2>
					<p>{store.people[params.theid].skin}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Eye Color</h2>
					<p>{store.people[params.theid].eyes}</p>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<Link to="/">
					<span className="btn btn-warning btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Infopeople.propTypes = {
	match: PropTypes.object
};
