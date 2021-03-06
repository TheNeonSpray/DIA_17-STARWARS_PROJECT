import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-transparent">
			<div className="row">
				<div className="col-6">
					<img src="https://i.pinimg.com/originals/bd/7e/89/bd7e8917386759f2a33662b77e1fae20.gif" />
				</div>
				<div className="col-6 text-center">
					<h1 className="display-4">{store.planets[params.theid].name}</h1>
					<p>A planet far far away...</p>
				</div>
			</div>
			<hr className="my-4 bg-warning" />
			<div className="row">
				<div className="col-2 text-center">
					<h2>Name</h2>
					<p>{store.planets[params.theid].name}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Climate</h2>
					<p>{store.planets[params.theid].climate}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Population</h2>
					<p>{store.planets[params.theid].population}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Orbital Period</h2>
					<p>{store.planets[params.theid].orbital}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Rotation Period</h2>
					<p>{store.planets[params.theid].Rotation}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Diameter</h2>
					<p>{store.planets[params.theid].Diameter}</p>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<Link to="/">
					<span className="btn btn-warning btn-lg" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
