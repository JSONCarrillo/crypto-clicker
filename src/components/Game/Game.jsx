import React from "react";
import Counter from "../Counter/Counter";

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.handleCountChange = this.handleCountChange.bind(this);
		this.state = {
			count: 0,
		};
	}

	handleCountChange(count) {
		this.setState({ count });
	}

	render() {
		const count = this.state.count;
		const logState = () => {
			console.log(count);
		};
		return (
			<div className="app">
				<Counter count={count} onCountChange={this.handleCountChange} />
			</div>
		);
	}
}
