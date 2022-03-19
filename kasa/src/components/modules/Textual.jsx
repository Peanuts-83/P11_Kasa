function renderSwitch(type) {
	switch (type) {
		case "Description":
			return <div>Descr</div>;
		case "Équipements":
			return <div>Équipements</div>;
		default:
			return <div>Error</div>;
	}
}

function Textual({ type, text }) {
	return (
		<div className="Textual">
			<div className="cap">
                {renderSwitch(type)}
                <i className="fa-solid fa-chevron"></i>
                </div>
            <div className="text">{text}</div>
		</div>
	);
}

export default Textual;
