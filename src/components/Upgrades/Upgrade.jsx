import React, { useState } from "react";

export default function Upgrade(props) {
	const [upgradeCost, setCost] = useState(props.cost);
	const [coinsPerInterval, setCPI] = useState(props.coinsPerInterval);
	const [interval, setCoinInterval] = useState(props.interval);

	const handlePurchase = () => {
		if (upgradeCost > props.count) {
			alert("You do not have enough coins for this purchase!");
			return;
		}
		props.purchaseUpgrade(upgradeCost);
		setCost(upgradeCost + Math.ceil(upgradeCost * 1.3));
		props.handleAutoIncrement(coinsPerInterval, interval);
	};

	const element = (
		<div className="upgrade" onClick={handlePurchase}>
			<h1>{props.name}</h1>
			<h1>{upgradeCost}</h1>
		</div>
	);
	return element;
}
