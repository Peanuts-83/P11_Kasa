import "../../styles/modules/carouselImg.scss";

function CarouselImg({ i, picture }) {
	// console.log(picture)
	return (
		<>
			<div
				className="ci pict"  id={`pict-${i}`}
				style={{ backgroundImage: `url(${picture})`}}
			></div>
		</>
	);
}

export default CarouselImg;
