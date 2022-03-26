import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ContextLogements } from "../utils/context_logements";

import Tags from "../components/modules/Tags";
import Owner from "../components/modules/Owner";
import Rates from "../components/modules/Rates";
import Textual from "../components/modules/Textual";
import Carousel from "../components/modules/Carousel";
import "../styles/logement.scss";

function Logement() {
	const { idPage } = useParams();
	const { getLoc, getAllLocs } = useContext(ContextLogements);
	const locIDs = getAllLocs().map(loc => loc.id)
	const storedLoc = localStorage.getItem("loc");
	let loc;

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

	// WRONG ID Redirect to page 404
	if (loc === undefined || !locIDs.includes(idPage)) {
		return <Navigate to ='/*' />
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
