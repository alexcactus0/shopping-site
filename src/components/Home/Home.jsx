import Nav from "../Nav";
import Title from "./Title";
import Video from "./Video";
import "../../styles/homeMain.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="relative flex h-64 homeMain">
        <Video className="w-1/2 flex items-center justify-center clip-left" />
        <Title className="w-1/2 bg-black flex flex-col items-center pt-20 justify-start gap-20 clip-right text-white text-3xl" />
      </div>
    </>
  );
};

export default Home;
