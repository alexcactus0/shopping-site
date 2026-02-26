import playBtn from "../../assets /play.svg";
import { Link } from "react-router";

const Title = ({ className, slide, setSlide, progress, setProgress }) => {
  return (
    <section className={`${className}`}>
      {slide === 0 ? (
        <FirstTitle />
      ) : slide === 1 ? (
        <SecondTitle />
      ) : (
        <ThirdTitle />
      )}
      <div className="titleBtns flex gap-8">
        <Link to="/shop">
          <button className="bg-white text-black rounded-3xl w-30 p-4 pr-7 pl-7">
            Shop
          </button>
        </Link>
        <button className="flex gap-2 bg-white text-black rounded-3xl w-30 p-4 pr-7 pl-7">
          <img src={playBtn} alt="play-Logo" /> Watch
        </button>
      </div>
      <div className="flex gap-4">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => {
              setSlide(index);
              setProgress(0);
            }}
            className="relative w-12 h-1 overflow-hidden rounded-full bg-white/20 cursor-pointer transition-all hover:bg-white/40"
          >
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-100 linear"
              style={{
                width:
                  slide === index
                    ? `${progress}%`
                    : slide > index
                      ? "100%"
                      : "0%",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

const FirstTitle = () => {
  return (
    <div className="titleText flex flex-col items-center gap-10 text-3xl">
      <h1>THRIVE ANYWHERE.</h1>
      <h2 className="text-xl">Built for the grit. Forged for the grind.</h2>
    </div>
  );
};

const SecondTitle = () => {
  return (
    <div className="titleText flex flex-col items-center gap-10 text-3xl">
      <h1>OWN YOUR EDGE.</h1>
      <h2 className="text-xl">The world adapts to you. Never the other way.</h2>
    </div>
  );
};

const ThirdTitle = () => {
  return (
    <div className="titleText flex flex-col items-center gap-10 text-3xl">
      <h1>STEP INTO CACTIX.</h1>
      <h2 className="text-xl">
        Leave the ordinary behind. Armor for the resilient.
      </h2>
    </div>
  );
};

export default Title;
