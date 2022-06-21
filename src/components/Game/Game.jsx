import React, { useState } from "react";
import Counter from "../Counter/Counter";
import UpgradeMenu from "../Upgrades/UpgradeMenu";

export default function Game() {
	// set state for available coins and coins per second
	const [availableCoins, setCoins] = useState(0);
	const [coinsPerSecond, setCoinsPerSecond] = useState(0);

	// increments the availableCoins state by a given amount
	const handleIncrement = (amount) => {
		setCoins((availableCoins) => availableCoins + amount);
	};

	// when called, calls the handle increment function
	const handleAutoIncrement = (coins) => {
		setInterval(() => handleIncrement(coins), 1000);
	};

	// handles purchase of upgrades
	const purchaseUpgrade = (cost) => {
		setCoins(availableCoins - cost);
	};

	// updates the coins per second after purchases
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
