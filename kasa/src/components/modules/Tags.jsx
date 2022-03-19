function Tags({ tags }) {
	return (
		<div className="Tags">
			{tags.map((tag, i) => (
				<div className="tag" key={`${tag}-${i}`}>
                    tag
                </div>
			))}
		</div>
	);
}

export default Tags;
