import "../style/gallery.css";

function Gallery({
  favorites=[],
  search="",
  setPreview
}) {

  const filteredImages = (favorites||[]).filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="gallery">

      <h2>Favorites Gallery</h2>

      <div className="gallery-grid">

        {
          filteredImages.map((item, index) => (

            <img
              key={index}
              src={item}
              alt=""
              onClick={() => setPreview(item)}
            />

          ))
        }
<img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" alt="Nature"/>
      
      <img src="https://wallup.net/wp-content/uploads/2016/01/111509-landscape-nature.jpg"alt="Nature"/>
     <img src="https://www.pixelstalk.net/wp-content/uploads/2016/01/Anime-Japanese-Wallpapers-HD-Download.jpg" alt="Anime"/>
     <img src="https://img.goodfon.com/wallpaper/nbig/2/a9/tenshi-agel-anime-japanese-bishojo-wings-girl-kimono.webp" alt="Anime"/>
     
     </div>

    </div>
  );
}

export default Gallery;