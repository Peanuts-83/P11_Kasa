import Photo from "../components/modules/Photo";
import Grid from "../components/modules/Grid";

import { useContext } from "react";
import { ContextLogements } from "../utils/context_logements";

function Home() {
	const { locs, getIDs } = useContext(ContextLogements);
	const locIDs = getIDs();
	if (
		!localStorage.getItem("locIDs") ||
		localStorage.getItem("locIDs") === undefined ||
		localStorage.getItem("locIDs") === []
	) {
		localStorage.setItem("locIDs", JSON.stringify(locIDs));
	}

	return (
		<div>
			<Photo hpImg={true} />
			<Grid locs={locs} />
		</div>
	);
}

export default Home;
