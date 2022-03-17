import paysage from "../../assets/fond_paysage.png";
import "../../styles/modules/photo.scss";

function Photo(props) {
  const hpImg = props.hpImg;

  return (
    <div className="Photo">
      <div
        className="photo_img"
        style={{
          backgroundImage: `url(${paysage})`,
          filter: hpImg ? `brightness(80%)` : `brightness(100%)`,
        }}
      >
      </div>
        <div className="photo_title">{hpImg ? `Chez vous, partout et ailleurs` : ``}</div>
    </div>
  );
}

export default Photo;
