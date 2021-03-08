//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap";
import "../styles/index.scss";

function Counter(props) {
	return (
		<div className="bg-warning text-primary card text-center text-primary">
			<div className="d-flex  justify-content-center">
				<div className="car-hearder">
					<i className="fas fa-stopwatch" />
				</div>
				<div className="display-3">{props.digitFour % 10}</div>
				<div className="display-3">{props.digitThree % 10}</div>
				<div className="display-3">{props.digitTwo % 10}</div>
				<div className="display-3">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

Counter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;

setInterval(function() {
	const one = Math.floor(counter / 10);
	const two = Math.floor(counter / 100);
	const three = Math.floor(counter / 1000);
	const four = Math.floor(counter / 10000);

	counter++;

	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 100);
