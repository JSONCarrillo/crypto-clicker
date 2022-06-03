import React, { useState } from "react";

export default function Counter(props) {
	const coins = Math.floor(props.coins * 1) / 1;
	const cps = Math.round(props.coinsPerSecond * 10) / 10;

	const element = (
		<div className="section">
			<div className="counter">
				<h1>{coins} coins</h1>
				<h1>{cps} coins per second</h1>
				<button
					id={"click-button"}
					onClick={() => props.handleIncrement(1)}
				>
					Click
				</button>
			</div>
		</div>
	);
	return element;
}
