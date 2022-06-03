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
		new CoinUpgrade("Testy McTestFace", 50, 12),
		new CoinUpgrade("GPUs", 105, 12),
		new CoinUpgrade("Bout Tree fiddy", 350, 12),
		new CoinUpgrade("What", 750, 12),
		new CoinUpgrade("Que?", 1500, 12),
		new CoinUpgrade("Testy McTestFace II", 2500, 12),
		new CoinUpgrade("Testy McTestFace III", 5000, 12),
		new CoinUpgrade("Taya", 10000, 12),
		new CoinUpgrade("Testy McTestFace IV", 100000, 12),
		new CoinUpgrade("Testy McTestFace V", 10000000, 12),
		new CoinUpgrade("Testy McTestFace VI", 100000000, 12),
		new CoinUpgrade("Testy McTestFace VII", 1000000000, 12),
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
