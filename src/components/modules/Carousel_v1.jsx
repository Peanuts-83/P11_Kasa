import "../../styles/modules/carousel.scss";
import Spinner, { cachePictures } from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
// import { cachePictures } from "./Spinner";

function Carousel({ loc }) {
	// eslint-disable-next-line no-unused-vars
	const pictures = loc.pictures;
	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => console.log("ISLOADING:", isLoading), [isLoading]);
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	const [imgNum, setImgNum] = useState(0);
	let picture = imgNum === 0 ? loc.cover : pictures[imgNum];

	return (
		<div className="Carousel">
			{isLoading ? (
				<div className="photo" style={{ justifyContent: "center" }}>
					<Spinner />
				</div>
			) : pictures.length <= 1 ? (
				<div
					className="photo"
					style={{ backgroundImage: `url(${picture})` }}
				></div>
			) : (
				<div
					className="photo"
					style={{
						backgroundImage: `url(${picture})`,
					}}
				>
					<FontAwesomeIcon
						onClick={() =>
							setImgNum(imgNum === 0 ? pictures.length - 1 : imgNum - 1)
						}
						icon={solid("chevron-left")}
						className="chevron chevron_left"
					/>
					<FontAwesomeIcon
						onClick={() =>
							setImgNum(imgNum === pictures.length - 1 ? 0 : imgNum + 1)
						}
						icon={solid("chevron-right")}
						className="chevron chevron_right"
					/>
				</div>
			)}
		</div>
	);
}

export default Carousel;
