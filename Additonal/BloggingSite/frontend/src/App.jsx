import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Signin from './components/signin'
import Signup from './components/signup'
import Blogs from './components/blogs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
