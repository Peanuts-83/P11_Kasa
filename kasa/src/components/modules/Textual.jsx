import "../../styles/modules/textual.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function renderSwitch(type) {
	switch (type) {
		case "Description":
			return <div>Description</div>;
		case "Équipements":
			return <div>Équipements</div>;
		default:
			return <div>Error</div>;
	}
}

function Textual({ type, text }) {
	return (
		<div className="Textual">
			<h3 className="cap">
				{renderSwitch(type)}
				<FontAwesomeIcon
					icon={solid("chevron-up")}
					className="chevron chevron_up"
				/>
			</h3>
			<div className="text">{type === "Description" && text}</div>
			<div className="text">
				{type === "Équipements" && (
					<ul>
						{text.map((el, i) => (
							<li key={`equip-${i}`}>{el}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Textual;
