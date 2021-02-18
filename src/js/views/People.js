import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getState } from "../store/flux";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { element } from "prop-types";

export const People = () => {
	const { store, actions } = useContext(Context);

	return store.people.map((item, index) => {
		return (
			<div className="col mb-5" key={index}>
				<div className="card h-100">
					<img
						src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h4 className="card-title">{item.name}</h4>
						<h6>Gender: {item.gender}</h6>
						<h6>Hair Color: {item.hair}</h6>
						<h6>Eye-Color: {item.eyes}</h6>
					</div>
					<div className="card-footer text-right">
						<Link to={"/Infopeople/" + index}>
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
