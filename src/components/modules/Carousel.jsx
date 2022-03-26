import "../../styles/modules/carousel.scss";
import Spinner, { cachePictures } from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
import CarouselImg from "./CarouselImg";
import { swipeIn, swipeOut, swipeReset } from "../../app/carouselNav";
import { mutationNotice } from "../../app/observer";

function Carousel({ loc }) {
	////////////////////
	// LOADING managt //
	const pictures = loc.pictures;
	const [isLoading, setIsLoading] = useState(true);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	//////////////////
	// SWIPE managt //
	let [startX, setStartX] = useState(null);
	let [startTime, setStartTime] = useState(null);

	/////////////////////
	// CAROUSEL managt //
	// WAIT FOR DOM elts to be loaded
	mutationNotice(`#pict-${pictures.length - 1}`).then(() => getDomElements());
	const [picts, setPicts] = useState([]);
	const arrayLen = pictures.length;
	const positions = [];
	let pictsRef;
	// init positions array in width %
	for (let i = -1; i < arrayLen - 1; i++) {
		positions.push(100 * i);
	}

	// STORE DOM elets to State
	function getDomElements() {
		[...pictsRef] = document.querySelectorAll(".pict");
		setPicts(pictsRef);
		// SET position for each pict, with last pict first in array
		pictsRef.unshift(pictsRef.pop())
		pictsRef.forEach((pict, i) => (pict.style.left = positions[i] + "%"));
	}

	/**
	 * The function navig(way) takes a string as an argument.
	 * If the string is "R", it will shift the array of pictures to the right.
	 * If the string is "L", it will shift the array of pictures to the left.
	 */
	function navig(way) {
		if (way === "R") {
			let imgOut = picts.shift();
			picts.push(imgOut);
			imgOut.style.transition = "0s";
			imgOut.style.left = positions[arrayLen] + "%";
			picts[1].style.transition = "1s";
			picts.forEach((img, i) => (img.style.left = positions[i] + "%"));
		} else {
			let imgOut = picts.pop();
			picts.unshift(imgOut);
			imgOut.style.transition = "0s";
			imgOut.style.left = positions[0];
			picts[1].style.transition = "1s";
			picts.forEach((img, i) => (img.style.left = positions[i] + "%"));
		}
	}

	return (
		<div className="Carousel">
			{isLoading ? ( // Spinner loader
				<div className="photo" style={{ justifyContent: "center" }}>
					<Spinner />
				</div>
			) : pictures.length <= 1 ? ( // 1 photo only - no arrows
				<div
					className="photo"
					style={{ backgroundImage: `url(${loc.cover})` }}
				></div>
			) : (
				// > 1 photo - carousel with arrows
				<div className="container">
					{pictures.map((picture, i, array) => {
						return <CarouselImg i={i} len={array.length} picture={picture} key={`pict-${i}`} />;
					})}
					<div
						className="arrows"
						onTouchStart={(e) => swipeIn(e, setStartX, setStartTime)}
						onTouchEnd={(e) =>
							swipeOut(e, startX, startTime, setStartX, setStartTime, navig)
						}
						onTouchCancel={() => swipeReset(setStartX, setStartTime)}
					>
						<FontAwesomeIcon
							onClick={() => navig("L")}
							icon={solid("chevron-left")}
							className="chevron arrow arrow_left"
						/>
						<FontAwesomeIcon
							onClick={() => navig("R")}
							icon={solid("chevron-right")}
							className="chevron arrow arrow_right"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Carousel;
