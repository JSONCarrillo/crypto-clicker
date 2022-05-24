import React from "react";

class Upgrade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			upgradeName: "default",
			upgradeCost: 1,
			upgradeCoinsPerInterval: 1,
			intervalInMilliSeconds: 1000,
			isShowing: false,
		};
	}
	render() {
		return (
			<div>
				<h1>{this.state.upgradeName}</h1>
			</div>
		);
	}
}

export default Upgrade;
