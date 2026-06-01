function PromptEnhancer({ prompt, setPrompt }) {

  const enhancePrompt = () => {
const enhanced = `${prompt}, ultra realistic, cinematic lighting, 8k, highly detailed`;
    setPrompt(enhanced);
  };
  return (
    <button onClick={enhancePrompt}>
      Enhance Prompt
    </button>
  );
}

export default PromptEnhancer;