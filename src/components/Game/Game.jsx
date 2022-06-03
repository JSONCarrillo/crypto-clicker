import React, { useState } from "react";
import Counter from "../Counter/Counter";
import UpgradeMenu from "../Upgrades/UpgradeMenu";

export default function Game() {
	const [availableCoins, setCoins] = useState(0);
	const [coinsPerSecond, setCoinsPerSecond] = useState(0);

	const handleIncrement = (amount) => {
		setCoins((availableCoins) => availableCoins + amount);
	};

	const handleAutoIncrement = (coins) => {
		setInterval(() => handleIncrement(coins), 1000);
	};

	const purchaseUpgrade = (cost) => {
		setCoins(availableCoins - cost);
		console.log(availableCoins);
		console.log(availableCoins);
	};

	const handleCoinsPerSecond = (cps) => {
		setCoinsPerSecond((coinsPerSecond) => coinsPerSecond + cps);
	};

	const element = (
		<div className="app">
			<Counter
				coins={availableCoins}
				handleIncrement={handleIncrement}
				coinsPerSecond={coinsPerSecond}
			/>
			<UpgradeMenu
				purchaseUpgrade={purchaseUpgrade}
				availableCoins={availableCoins}
				handleAutoIncrement={handleAutoIncrement}
				handleCoinsPerSecond={handleCoinsPerSecond}
			/>
		</div>
	);

	return element;
}
