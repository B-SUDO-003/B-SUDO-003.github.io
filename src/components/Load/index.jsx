import React from "react";
import "../../css/loader.css";
import server from "../../images/Ajay.jpg"

const Loader = ({ done }) => {
	return (
		<div className="loader">
            <div className="loader__image">
            <img src={server} alt="" className="__img" />
			</div>
			<h1 className="loader__title"> WELCOME TO MY WEBPAGE </h1>
			<div className={`loader__progress ${done ? "loader__progress--done" : ""}`} />
			<h1 className="loader_2"> Ajay o s</h1>
		</div>
	);
};

export default Loader;
