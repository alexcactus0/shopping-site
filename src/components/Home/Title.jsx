const Title = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1>STEP INTO CACTIX</h1>
      <div className="titleBtns flex gap-8">
        <button className="bg-white text-black rounded p-4 pr-7 pl-7">
          Shop
        </button>
        <button className="bg-white text-black rounded p-4 pr-7 pl-7">
          Watch
        </button>
      </div>
    </div>
  );
};

export default Title;
