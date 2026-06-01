import "../style/categories.css";

function Categories({ setPrompt }) {

  const categories = [
    "Nature",
    "Anime",
    "Cyberpunk",
    "Space",
    "Fantasy",
    "Robots",
    "Animals"
  ];

  return (

    <div className="categories">

      {
        categories.map((item, index) => (

          <button
            key={index}
            onClick={() => setPrompt(item)}
          >
            {item}
          </button>

        ))
      }

    </div>
  );
}

export default Categories;
