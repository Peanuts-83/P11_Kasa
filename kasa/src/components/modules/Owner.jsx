function Owner({ host }) {
	console.log('HOST', host)
	const { name, picture } = host;
	const [firstname, ...lastname] = name.split(' ');

	return (
		<div className="Owner">
			<div className="name">
				{firstname}
				<br />
				{lastname}
			</div>
			<div className="picture">
				<img src={picture} alt="owner" />
			</div>
		</div>
	);
}

export default Owner;
