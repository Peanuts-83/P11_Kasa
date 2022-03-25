import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContextLogements } from "../utils/context_logements";

import Tags from "../components/modules/Tags";
import Owner from "../components/modules/Owner";
import Rates from "../components/modules/Rates";
import Textual from "../components/modules/Textual";
import Carousel from "../components/modules/Carousel";
import "../styles/logement.scss";

function Logement({setId, validID}) {
	let navigate = useNavigate();
	const path = useLocation()
	const myId = path.key;
	console.log('myId', myId)
	// setId(myId)

	validID()
	let { idPage } = useParams();
	idPage = idPage.substring(1);
	const { getLoc, getAllLocs } = useContext(ContextLogements);
	const storedLoc = localStorage.getItem("loc");
	let loc, allIDs;

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

	// if (
	// 	!localStorage.getItem("locs") ||
	// 	localStorage.getItem("locs") === "undefined"
	// ) {
	// 	[locs] = getAllLocs();
	// 	localStorage.setItem("locs", JSON.stringify(loc));
	// } else {
	// 	localStorage.getItem("locs", JSON.stringify(loc));

	// }
	// if (locs.filter(elt => elt.id === idPage).length < 1) {
	// 	navigate('/*')
	// }

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
