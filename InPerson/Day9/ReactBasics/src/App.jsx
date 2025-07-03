import {Routes, Route, BrowserRouter} from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
function App(){


return(
  <BrowserRouter>
    <Routes>
        <Route path="signup" element={<Signup/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Signin/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App