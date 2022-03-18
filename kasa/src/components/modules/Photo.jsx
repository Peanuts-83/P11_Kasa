import paysage from "../../assets/fond_paysage.png";
import "../../styles/modules/photo.scss";

function Photo({ hpImg, loc }) {
    const imageURL = hpImg ? paysage : loc.url
  return (
    <div className="Photo"
        style={{position: !hpImg && 'absolute'}}>
      <div
        className="photo_img"
        style={{
          backgroundImage: `url(${imageURL})`,
          filter: hpImg && `brightness(70%)`,
          height: !hpImg && `100%`,
          boxShadow: !hpImg && `inset 0 -50px 40px rgba(0,0,0,0.7)`,
        }}
      ></div>
      {hpImg && (
        <div className="photo_title">Chez vous, partout et ailleurs</div>
      )}
      {loc && <div className="photo_sub_title">{loc.name}</div>}
    </div>
  );
}

export default Photo;
