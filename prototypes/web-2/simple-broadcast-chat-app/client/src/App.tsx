import { Toaster } from "react-hot-toast"
//import { Connect } from "./components/connect"
import { Connect } from "./components/ai"

function App() {

  return (
    <div className="bg-black h-screen">
      <Toaster position="top-right"/>
      <Connect />
    </div>
  )
}

export default App
