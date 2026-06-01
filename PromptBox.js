
import { useState } from "react";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import History from "./History";
import RandomPrompt from "./RandomPrompt";
import Categories from "./Categories";
import Gallery from "./Gallery";
import FavoriteButton from "./FavoriteButton";
import Toast from "./Toast";
import SearchBar from "./SearchBar";
import FullscreenImage from "./FullscreenImage";
import PromptEnhancer from "./PromptEnhancer";
import "../style/prompt.css";

function PromptBox() {

  const [prompt, setPrompt] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [toast, setToast] = useState("");

  const [style, setStyle] = useState("realistic");

  const [size, setSize] = useState("1024x1024");

  const [search, setSearch] = useState("");

  const [preview, setPreview] = useState("");

  const generateImage = async () => {

    if(prompt === ""){
      alert("Please enter prompt");
      return;
    }

    try {

      setLoading(true);

     
const finalPrompt = `${prompt}, ${style} style`;

       const response = await fetch(
        `https://image.pollinations.ai/prompt/${finalPrompt}?width=${size.split("x")[0]}&height=${size.split("x")[1]}`
     );
      setImage(response.url);

      setHistory([prompt, ...history]);

      setToast("Image Generated Successfully");

      setTimeout(() => {
        setToast("");
      }, 3000);

    } catch(error){
      console.log(error);
    }

    setLoading(false);
  };

  return (

    <motion.div
      className="main-container"
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
    >

      <div className="prompt-container">

        <Categories setPrompt={setPrompt} />

        <textarea
          placeholder="Describe your image..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="options">

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >

            <option>realistic</option>
            <option>anime</option>
            <option>3d</option>
            <option>cartoon</option>
            <option>cyberpunk</option>

          </select>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >

            <option>1024x1024</option>
            <option>1024x1792</option>
            <option>1792x1024</option>

          </select>

        </div>

        <div className="button-group">

          <button onClick={generateImage}>
            Generate Image
          </button>

          <PromptEnhancer
            prompt={prompt}
            setPrompt={setPrompt}
          />

        </div>

        <RandomPrompt setPrompt={setPrompt} />

        {loading && <Loader />}

        {
          image &&
          <>
            <ImageCard image={image} />

            <FavoriteButton
              image={image}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </>
        }

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Gallery
        id="Gallery"
          favorites={favorites}
          search={search}
          setPreview={setPreview}
        />

      </div>

      <History history={history} />

      {toast && <Toast message={toast} />}

      {
        preview &&
        <FullscreenImage
          image={preview}
          setPreview={setPreview}
        />
      }

    </motion.div>
  );
}

export default PromptBox;