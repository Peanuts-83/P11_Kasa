
function CarouselImg({ i, len, picture }) {
	return (
		<>
			<div
				className="ci pict"
				id={`pict-${i}`}
				style={{ backgroundImage: `url(${picture})` }}
			>
				<span>{`${i + 1}/${len}`}</span>
			</div>
		</>
	);
}

export default CarouselImg;
