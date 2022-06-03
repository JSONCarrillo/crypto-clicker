import React, { useState } from "react";

export default function Upgrade(props) {
	const [upgradeCost, setCost] = useState(props.cost);
	const [coinsPerInterval, setCPI] = useState(props.coinsPerInterval);

	let costIncrease = Math.ceil(upgradeCost * 1.1);

	const handleCoinsPerSecond = (cps) => {
		props.handleCoinsPerSecond(cps);
	};

	const handlePurchase = () => {
		if (upgradeCost > props.availableCoins) {
			alert("You do not have enough coins for this purchase!");
			return;
		}
		props.purchaseUpgrade(upgradeCost);
		setCost(costIncrease);
		props.handleAutoIncrement(coinsPerInterval);
		handleCoinsPerSecond(props.coinsPerInterval);
	};

	const element = (
		<div className="upgrade" onClick={handlePurchase}>
			<h1>{props.name}</h1>
			<h1>{upgradeCost}</h1>
		</div>
	);
	return element;
}
