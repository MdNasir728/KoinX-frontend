import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import { Feature } from "./components/Feature";
import FeatureDetail from "./components/FeatureDetail";
import Sentiment from "./components/Sentiment";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import BlueBox from "./components/rightbar/BlueBox";

function App() {
  return (
    <div className="h-100vh w-100-vw">
      <Navbar />
      <div className="flex lg:flex-row flex-col w-full px-10 gap-8">
        <div className="lg:w-2/3 w-full gap-4">
          {/* <Home /> */}
          <Feature />
          <FeatureDetail />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="w-1/3 gap-4">
          <BlueBox />
        </div>
      </div>
    </div>
  );
}

export default App;
