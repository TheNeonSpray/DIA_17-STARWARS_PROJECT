import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return store.planets.map((item, index) => {
		return (
			<div className="col mb-5" key={index}>
				<div className="card h-100">
					<img
						src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<h6>Population: {item.population}</h6>
						<h6>Terrain: {item.terrain}</h6>
					</div>
					<div className="card-footer text-right">
						<Link to={"/single/" + index}>
							<button type="button" className="btn btn-outline-warning">
								Learn More!
							</button>
						</Link>
						<button
							onClick={() => {
								actions.addFav(item);
							}}
							type="button"
							className="btn btn-outline-warning far fa-heart ml-2"
						/>
					</div>
				</div>
			</div>
		);
	});
};
