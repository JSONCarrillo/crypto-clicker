import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState((prevState) => ({
			counter: prevState.counter + 1,
		}));
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>Click</button>
			</div>
		);
	}
}

export default Counter;
