import "../../styles/modules/grid.scss";
import Photo from "./Photo";


function Grid({ locs }) {

	return (
		<div className="Grid">
			{locs.map((loc, index) => (
				<div className="photo_grid" key={loc.id}>
					<Photo loc={loc} index={index} />
				</div>
			))}
		</div>
	);
}

export default Grid;
