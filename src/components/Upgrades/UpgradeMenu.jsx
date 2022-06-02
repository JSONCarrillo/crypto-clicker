import React from "react";
import Upgrade from "./Upgrade";

export default function UpgradeMenu(props) {
	const element = (
		<div className="section">
			<Upgrade
				name={"Helping Hand"}
				cost={5}
				coinsPerInterval={1}
				interval={1000}
				purchaseUpgrade={props.purchaseUpgrade}
				handleAutoIncrement={props.handleAutoIncrement}
				count={props.count}
			/>
		</div>
	);
	return element;
}
