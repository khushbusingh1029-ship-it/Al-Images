
import "../style/fullscreen.css";

function FullscreenImage({ image, setPreview }) {
  return (
    <div
      className="fullscreen"
      onClick={() => setPreview("")}
    >

      <img src={image} alt="" />

    </div>
  );
}

export default FullscreenImage;