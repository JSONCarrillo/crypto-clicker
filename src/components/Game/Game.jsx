import React, { useState } from "react";
import Counter from "../Counter/Counter";
import UpgradeMenu from "../Upgrades/UpgradeMenu";

export default function Game() {
	const [availableCoins, setCoins] = useState(0);
	const [coinsPerSecond, setCoinsPerSecond] = useState(0);

	const handleIncrement = (amount) => {
		setCoins((availableCoins) => availableCoins + amount);
	};

	const handleAutoIncrement = (coins, interval) => {
		setInterval(() => handleIncrement(coins), interval);
	};

	const purchaseUpgrade = (cost) => {
		setCoins(availableCoins - cost);
		console.log(availableCoins);
		console.log(availableCoins);
	};

	const element = (
		<div className="app">
			<Counter coins={availableCoins} handleIncrement={handleIncrement} />
			<UpgradeMenu
				purchaseUpgrade={purchaseUpgrade}
				count={availableCoins}
				handleAutoIncrement={handleAutoIncrement}
			/>
			<button onClick={() => console.log(availableCoins)}>
				Test Coins
			</button>
		</div>
	);

	return element;
}
