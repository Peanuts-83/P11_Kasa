import "../../styles/modules/carousel.scss";
import Spinner, { cachePictures } from "./Spinner";
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
import { mutationNotice, mutationNoticeAll } from "../../app/observer";

function Carousel({ loc }) {
	// LOADING managt
	const pictures = loc.pictures;
	const [isLoading, setIsLoading] = useState(true);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	// SWIPE managt
	let [startX, setStartX] = useState(null);
	let [startTime, setStartTime] = useState(null);

	// 3 IMG array (1 hidden - 1 show - 1 hidden)
	const [picts, setPicts] = useState([])
	mutationNotice(`#pict-${pictures.length - 1}`).then(() => getNavElements());

	const arrayLen = pictures.length;
	const positions = [];
	let pictsRef;
	// init positions
	for (let i = -1; i < arrayLen - 1; i++) {
		positions.push(100 * i);
	}

	function getNavElements() {
		[...pictsRef] =  document.querySelectorAll(".pict");
		setPicts(pictsRef)
		pictsRef.forEach((pict, i) => (pict.style.left = positions[i] + "%"));
		console.log('PICTS', pictsRef)
	}

	function navig(way) {
		if (way === "R") {
			let imgOut = picts.shift()
			picts.push(imgOut)
			imgOut.style.transition = "0s";
			imgOut.style.left = positions[arrayLen] + '%';
			picts[1].style.transition = "1s";
			picts.forEach((img, i) => img.style.left = positions[i] + '%')
		} else {
			let imgOut = picts.pop()
			picts.unshift(imgOut)
			imgOut.style.transition = "0s";
			imgOut.style.left = positions[0];
			picts[1].style.transition = "1s";
			picts.forEach((img, i) => img.style.left = positions[i] + '%')
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
					{pictures.map((picture, i) => {
						return(<CarouselImg i={i} picture={picture} key={`pict-${i}`} />)
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
