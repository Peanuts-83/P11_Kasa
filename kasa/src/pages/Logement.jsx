import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextLogements } from "../utils/context_logements";

import Tags from "../components/modules/Tags";
import Owner from "../components/modules/Owner";
import Rates from "../components/modules/Rates";
import Textual from "../components/modules/Textual";

function Logement() {
	const { idPage } = useParams();
	const { getLoc } = useContext(ContextLogements);
	const [loc] = getLoc(idPage.substring(1));
	const {
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
