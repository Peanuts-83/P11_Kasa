import { useContext } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import { ContextLogements } from "../utils/context_logements";

import Tags from "../components/modules/Tags";
import Owner from "../components/modules/Owner";
import Rates from "../components/modules/Rates";
import Textual from "../components/modules/Textual";

function Logement() {
	let { idPage } = useParams();
    idPage = idPage.substring(1)
	const { getLoc } = useContext(ContextLogements);
	const storedLoc = localStorage.getItem("loc");
	let loc;

    // loc -> localStorage
	if (
		!localStorage.getItem("loc") ||
		localStorage.getItem("loc") === "undefined"
	) {
		[loc] = getLoc(idPage);
		localStorage.setItem("loc", JSON.stringify(loc));
	} else {
		if (JSON.parse(localStorage.getItem("loc")).id === idPage) {
			loc = JSON.parse(storedLoc);
		} else {
			[loc] = getLoc(idPage);
			localStorage.setItem("loc", JSON.stringify(loc));
		}
	}

	const {
		// eslint-disable-next-line
		id,
		title,
		cover,
		// eslint-disable-next-line
		pictures,
		description,
		host,
		rating,
		location,
		equipments,
		tags,
	} = loc;

	return (
		<div>
			<div className="cover">
				<img src={cover} alt="cover" />
			</div>
			<div className="content">
				<div className="top">
					<div className="title">
						<h1>{title}</h1>
						<h4>{location}</h4>
						<div className="tags">
							<Tags tags={tags} />
						</div>
					</div>
					<div className="owner_rates">
						<div className="owner">
							<Owner host={host} />
						</div>
					</div>
					<div className="rates">
						<Rates rateNum={rating} />
					</div>
				</div>
				<Textual type="Description" text={description} />
				<Textual type="Équipements" text={equipments} />
			</div>
		</div>
	);
}

export default Logement;
