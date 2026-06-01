
function RandomPrompt({ setPrompt }) {

  const prompts = [
    "A futuristic cyberpunk city",
    "Cute cat astronaut",
    "Fantasy castle in sky",
    "Indian village sunset",
    "Robot playing guitar",
    "Magical forest",
    "Underwater kingdom"
  ];

  const generateRandomPrompt = () => {

    const random =
      prompts[Math.floor(Math.random() * prompts.length)];

    setPrompt(random);
  };

  return (
    <button onClick={generateRandomPrompt}>
      Random Prompt
    </button>
  );
}

export default RandomPrompt;