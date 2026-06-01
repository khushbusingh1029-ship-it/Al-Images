import "./imagecard.css";

function ImageCard({ image }) {

  const downloadImage = () => {

    const link = document.createElement("a");

    link.href = image;
    link.download = "ai-image.jpg";

    link.click();
  };

  return (
    <div className="image-card">

      <img src={image} alt="AI Generated" />

      <button onClick={downloadImage}>
        Download
      </button>

    </div>
  );
}

export default ImageCard;
