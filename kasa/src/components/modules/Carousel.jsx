import "../../styles/modules/carousel.scss";

function Carousel({ loc }) {
	return (
		<div className="Carousel">
			<div
				className="photo"
				style={{ background: `url(${loc.cover})`, backgroundPosition: "50%" }}
			>
				<div className="left"></div>
				<div className="right"></div>
			</div>
		</div>
	);
}

export default Carousel;
