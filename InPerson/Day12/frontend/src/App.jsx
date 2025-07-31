import {BrowserRouter,Routes,Route} from "react"
function App() {
  

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="./pages/signup.jsx" element={<SignUp/>}/>
        <Route path="./pages/signin.jsx" element={<SignIn/>}/>
        <Route path="./pages/dashboard.jsx" element={<Dashboard/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
