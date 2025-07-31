import './App.css';
import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom';
//Imports what is necessary for routing

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/neet/online-coaching-class11' element={<Class11Program/>}/>
          <Route path='/neet/online-coaching-class12' element={<Class12Program/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{height:"100vh"}}>
    <Link to="/">Allen</Link>|<Link to="/neet/online-coaching-class11">Class 11</Link>|
    <Link to="/neet/online-coaching-class12">Class12</Link>
    <div style={{height:"90vh"}}>
      <Outlet/>
    </div>
    footer
  </div>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program(){
  return <div>
    NEET Programs for Class 11th
  </div>
}

function Class12Program(){
  const navigate=useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>
    NEET Programs for Class 12th
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

function ErrorPage(){
  return <div>
    404 Page not found
  </div>
}
export default App
