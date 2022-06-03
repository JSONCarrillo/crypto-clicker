import React from "react";
import Upgrade from "./Upgrade";

function CoinUpgrade(name, cost, coinsPerInterval) {
	this.name = name;
	this.cost = cost;
	this.coinsPerInterval = coinsPerInterval;
}

export default function UpgradeMenu(props) {
	const upgrades = [
		new CoinUpgrade("Helping Hand", 15, 0.1),
		new CoinUpgrade("Yo Momma", 25, 1),
		new CoinUpgrade("Big Daddy", 105, 12),
	];

	const element = (
		<div className="section">
			{upgrades.map((upgrade) => (
				<Upgrade
					{...upgrade}
					purchaseUpgrade={props.purchaseUpgrade}
					handleAutoIncrement={props.handleAutoIncrement}
					availableCoins={props.availableCoins}
					handleCoinsPerSecond={props.handleCoinsPerSecond}
				/>
			))}
		</div>
	);
	return element;
}
