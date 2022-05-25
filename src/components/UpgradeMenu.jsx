import React from "react";
import Upgrade from "./Upgrade";

class UpgradeMenu extends React.Component {
	render() {
		return (
			<div className="section">
				<Upgrade
					name={"Helping Hand"}
					cost={25}
					cpi={1}
					interval={1000}
				/>
				<Upgrade
					name={"Low-End GPU"}
					cost={100}
					cpi={3}
					interval={2000}
				/>
				<Upgrade
					name={"Coin Minter"}
					cost={250}
					cpi={5}
					interval={4000}
				/>
			</div>
		);
	}
}

export default UpgradeMenu;
