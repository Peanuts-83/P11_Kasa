import "../../styles/modules/photo.scss";
import Spinner, { cachePictures } from "./Spinner";
import paysage from "../../assets/fond_paysage.png";
import paysage2 from "../../assets/fond_paysage2.png";
import { useState, useEffect } from "react";

function Photo({ hpImg, loc }) {
	const paysages = [paysage, paysage2];
	const choosePaysage = Math.floor(Math.random() * 2);
	let pictures = [];
	if (loc) {
		pictures = [loc.cover];
	}

	const imageURL = hpImg ? paysages[choosePaysage] : pictures[0];
	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => cachePictures(pictures, setIsLoading), []);

	return (
		<div className="Photo" style={{ position: !hpImg && "absolute" }}>
			{hpImg ? (
				<div
				className="photo_img"
				style={{
					backgroundImage: `url(${imageURL})`,
					filter: `brightness(80%)`,
				}}
			>
			</div>
			) :
			isLoading ? (
				<div className="photo_img loading" style={{ justifyContent: "center",borderRadius: !hpImg && "10px", height: !hpImg && `100%` }}>
					<Spinner />
				</div>
			) : (
				<div
					className="photo_img"
					style={{
						backgroundImage: `url(${imageURL})`,
						filter: hpImg && `brightness(80%)`,
						borderRadius: !hpImg && "10px",
						height: !hpImg && `100%`,
						boxShadow: !hpImg && `inset 0 -50px 40px rgba(0,0,0,0.7)`,
					}}
				>
				</div>
			)}
			{hpImg && (
				<div className="photo_title">Chez vous, partout et ailleurs</div>
			)}
			{loc && <div className="photo_sub_title">{loc.title}</div>}
		</div>
	);
}

export default Photo;
