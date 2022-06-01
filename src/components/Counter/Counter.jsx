import React from "react";

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.increment = this.increment.bind(this);
		this.state = { count: 0 };
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	increment() {
		this.setState((prevstate) => ({ count: prevstate.count + 1 }));
	}

	render() {
		const count = this.state.count;
		return (
			<div className="section">
				<div className="counter">
					<h1 onChange={this.handleChange}>{count}</h1>
					<button onClick={this.increment}>Click!</button>
				</div>
			</div>
		);
	}
}
