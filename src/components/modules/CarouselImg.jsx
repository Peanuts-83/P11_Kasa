import "../../styles/modules/carouselImg.scss";

function CarouselImg({ i, picture }) {
	console.log(picture)
	return (
		<>
			{i === 0 ? (
				<input type="radio" name="radio" id={`cr-${i}`} defaultChecked />
			) : (
				<input type="radio" name="radio" id={`cr-${i}`} />
			)}
			<label htmlFor={`cr-${i}`}></label>
			<div
				className="ci"
				style={{ backgroundImage: `url(${picture})`, zIndex: i + 1 }}
			></div>
		</>
	);
}

export default CarouselImg;
