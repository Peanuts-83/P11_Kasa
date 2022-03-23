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
import { mutationNoticeAll } from "../../app/observer";


function Carousel({ loc }) {
	// LOADING managt
	const pictures = loc.pictures;
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => console.log("ISLOADING:", isLoading), [isLoading]);
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	// SWIPE managt
	let [startX, setStartX] = useState(null);
	let [startTime, setStartTime] = useState(null);

	// GET old & new checked img num
	const [imgNum, setImgNum] = useState(0);
	const [oldNum, setOldNum] = useState(imgNum);

	useEffect(() => {
		console.log("old & new checkbox:", oldNum + " / " + imgNum);
		setOldNum(imgNum);
	}, [imgNum]);

	useEffect(() => {
		getCheckboxes().then((elts) => {
			Array.from(elts).forEach((elt) => {
				elt.addEventListener("click", (e) => {
					setImgNum(e.target.id.split("-")[1])
				});
			});
		});
	}, [isLoading]);

	async function getCheckboxes() {
		const cbs = await mutationNoticeAll("[name='radio']");
		return cbs;
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
					{pictures.map((picture, i) => (
						<CarouselImg i={i} picture={picture} key={`picture-${i}`} />
					))}
					<div
						className="chevrons"
						onTouchStart={(e) => swipeIn(e, setStartX, setStartTime)}
						onTouchEnd={(e) =>
							swipeOut(e, startX, startTime, setStartX, setStartTime)
						}
						onTouchCancel={(e) => swipeReset(e, setStartX, setStartTime)}
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
