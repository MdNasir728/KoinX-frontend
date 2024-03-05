import Navbar from "./components/Navbar"
import Home from "./components/Hero"
import { Feature } from "./components/Feature"
import FeatureDetail from "./components/FeatureDetail"


function App() {

  return (
    <div className="h-100vh w-100-vw">
      <Navbar />
      <div className="w-[65%] mx-8 gap-4">
      {/* <Home /> */}
      <Feature />
      <FeatureDetail />

      </div>
    </div>
  )
}

export default App
