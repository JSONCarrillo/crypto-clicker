import React from "react";

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		<div className="section">
			<div className="counter">
				<h1>{count}</h1>
				<button>Click!</button>
			</div>
		</div>;
	}
}
