import Photo from "../components/modules/Photo";
import Grid from "../components/modules/Grid";
import logements from "../app/fetcher"



function Home() {
	const locs = logements.get()
	
	return (
		<div>
			<Photo hpImg={true} />
			<Grid locs={locs} />
		</div>
	);
}

export default Home;
