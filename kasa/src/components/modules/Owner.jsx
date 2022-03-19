import "../../styles/modules/owner.scss"

function Owner({ host }) {
	const { name, picture } = host;
	const [firstname, ...lastname] = name.split(' ');

	return (
		<div className="Owner">
			<h3 className="name">
				{firstname}
				<br />
				{lastname}
			</h3>
			<div className="picture">
				<img src={picture} alt="owner" />
			</div>
		</div>
	);
}

export default Owner;
