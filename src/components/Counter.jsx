import React, { useState } from "react";

const Counter = () => {
	let count = 0;
	const [counter, setCounter] = useState(count);
	const increment = () => setCounter(counter + 1);

	const element = (
		<div className="section">
			<div className="counter">
				<h1>{counter}</h1>
				<button onClick={increment}>Click</button>
			</div>
		</div>
	);

	return element;
};

export default Counter;
