import Landing from "./Landing";
import CardSwapSection from "./CardSwapSection";
import Contact from "./Contact";
import ClickSpark from "./ui/ClickSpark";

const MainContainer = () => {
  return (
    <ClickSpark
      sparkColor="#00ffc6"
      sparkSize={14}
      sparkRadius={25}
      sparkCount={12}
      duration={450}
    >
      <div className="container-main">
        <Landing />
        <CardSwapSection />
        <Contact />
      </div>
    </ClickSpark>
  );
};

export default MainContainer;
