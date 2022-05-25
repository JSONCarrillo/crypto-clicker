import React from "react";

class Upgrade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			upgradeName: this.props.name,
			upgradeCost: this.props.cost,
			upgradeCoinsPerInterval: this.props.cpi,
			intervalInMilliSeconds: this.props.interval,
			isShowing: false,
		};

		this.purchaseUpgrade = this.purchaseUpgrade.bind(this);
	}

	purchaseUpgrade() {
		return;
	}

	render() {
		return (
			<div className="upgrade" onClick={this.purchaseUpgrade}>
				<h1>{this.state.upgradeName}</h1>
				<h2>Cost: {this.state.upgradeCost}</h2>
			</div>
		);
	}
}

export default Upgrade;
