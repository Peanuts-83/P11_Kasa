import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ContextLogements } from "../utils/context_logements";

import Tags from "../components/modules/Tags";
import Owner from "../components/modules/Owner";
import Rates from "../components/modules/Rates";
import Textual from "../components/modules/Textual";
import Carousel from "../components/modules/Carousel";

function Logement() {
	const { idPage } = useParams();
	const { getLoc, getIDs } = useContext(ContextLogements);
	const storedLocIDs = localStorage.getItem("locIDs");
	const storedLoc = localStorage.getItem("loc");
	let loc, locIDs;

	// LOCALSTORAGE
	/* Check if the idPage is the same as the one stored in localStorage.
	If it's not, it will get the new data from the API and store it in localStorage. */
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
	if (
		!localStorage.getItem("locIDs") ||
		localStorage.getItem("locIDs") === "undefined" ||
		localStorage.getItem('locIDs') === []
	) {
		locIDs = getIDs();
		localStorage.setItem("locIDs", JSON.stringify(locIDs));
	} else {
		locIDs = JSON.parse(storedLocIDs);
	}
	// console.log("IDPAGE", idPage, "LOCIDS", locIDs);

	// WRONG ID Redirect to page 404
	if (loc === undefined || !locIDs.includes(idPage)) {
		// console.log('NAVIGATE to ERROR')
		return <Navigate to="/error" />;
	}

	const {
		// eslint-disable-next-line
		id,
		title,
		// eslint-disable-next-line
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
		<div className="Logement">
			<div className="cover">
				<Carousel loc={loc} />
			</div>
			<div className="content">
				<div className="top">
					<div className="title">
						<h1>{title}</h1>
						<h3>{location}</h3>
						<div className="tags">
							<Tags tags={tags} />
						</div>
					</div>
					<div className="owner_rates">
						<Owner host={host} />
						<Rates rateNum={rating} />
					</div>
				</div>

				<div className="textuals">
					<Textual type="Description" text={description} />
					<Textual type="Équipements" text={equipments} />
				</div>
			</div>
		</div>
	);
}

export default Logement;
