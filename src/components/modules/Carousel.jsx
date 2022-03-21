import "../../styles/modules/carousel.scss";
import Spinner, { cachePictures } from "../modules/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
import CarouselImg from "./CarouselImg";
import {
	navCarousel,
	swipeIn,
	swipeOut,
	swipeReset,
} from "../../app/carouselNav";

function Carousel({ loc }) {
	// pictures loading managt
	const pictures = loc.pictures;
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => console.log("ISLOADING:", isLoading), [isLoading]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	// eslint-disable-next-line no-unused-vars
	const [imgNum, setImgNum] = useState(0);
	let picture = imgNum === 0 ? loc.cover : pictures[imgNum];

	// swipe managt
	let [startX, setStartX] = useState(null);
	let [startTime, setStartTime] = useState(null);
	// function sayWho(e) {
	// 	console.log(e.target);
	// }
	// document.addEventListener("click", sayWho);

	return (
		<div className="Carousel">
			{isLoading ? ( // Spinner loader
				<div className="photo" style={{ justifyContent: "center" }}>
					<Spinner />
				</div>
			) : pictures.length <= 1 ? ( // 1 photo only - no arrows
				<div
					className="photo"
					style={{ backgroundImage: `url(${picture})` }}
				></div>
			) : (
				// > 1 photo - carousel with arrows
				<div className="container">
					{pictures.map((picture, i) => (
						<CarouselImg i={i} picture={picture} key={`picture-${i}`} />
					))}
					<div
						className="chevrons"
						onTouchStart={(e) => swipeIn(e,setStartX, setStartTime)}
						onTouchEnd={(e) =>
							swipeOut(e,startX, startTime, setStartX, setStartTime)
						}
						onTouchCancel={(e) => swipeReset(e,setStartX, setStartTime)}
					>
						<FontAwesomeIcon
							onClick={() => navCarousel("L")}
							icon={solid("chevron-left")}
							className="chevron chevron_left"
						/>
						<FontAwesomeIcon
							onClick={() => navCarousel("R")}
							icon={solid("chevron-right")}
							className="chevron chevron_right"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Carousel;
