import React, { useState } from "react";

export default function Counter(props) {
	const element = (
		<div className="section">
			<div className="counter">
				<h1>{props.coins} coins</h1>
				<button onClick={() => props.handleIncrement(1)}>Click</button>
			</div>
		</div>
	);
	return element;
}
