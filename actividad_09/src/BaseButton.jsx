function BaseButton({ index, handleClick, content }) {
  return (
    <button
      onClick={() => handleClick(index)}
      className="border border-neutral-400 hover:bg-neutral-200 px-4 py-2"
    >
      {content}
    </button>
  );
}

export default BaseButton;