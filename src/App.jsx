import Navbar from "./components/Navbar";
import { Feature } from "./components/Feature";
import FeatureDetail from "./components/FeatureDetail";
import Sentiment from "./components/Sentiment";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import BlueBox from "./components/rightbar/BlueBox";
import YouMayLike from "./components/bottomSection/YouMayLike";
import TrendingBox from "./components/rightbar/TrendingBox";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="h-100vh w-100-vw">
      <Navbar />
      <div className="flex lg:flex-row flex-col w-full md:px-10 max-sm:px-4 gap-8">
        <div className="lg:w-2/3 w-full gap-4">
          <Widget />
          <Feature />
          <FeatureDetail />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className=" flex flex-col lg:w-1/3 w-full gap-4">
          <BlueBox />
          <TrendingBox />
        </div>
      </div>
      <YouMayLike />
      <YouMayLike trending='true' />
    </div>
  );
}

export default App;
