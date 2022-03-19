function Rates({ rateNum }) {
	const rates = Array(rateNum)
		.fill(1)
		.concat(Array(5 - rateNum).fill(0));

	return (
		<div className="rates">
			{rates.map((rate, i) => {
				return (
					<span><i className="fa-solid fa-user"></i>
					</span>
				);
			})}
		</div>
	);
}

export default Rates