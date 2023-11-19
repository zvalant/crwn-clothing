import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";
import {Routes,Route,Outlet} from "react-router-dom";



const Shop = () => {
  return <h1>Shop Component</h1>
}

const App = () => {

  return( 
  <Routes>
    <Route path = "/" element = {<Navigation/>}>

      <Route index element = {<Home/>}/>
      <Route path = "/shop" element = {<Shop/>}/>
      <Route path = "/sign-in" element = {<Signin/>}/>

    </Route>
    
  </Routes>

  )

};
export default App;
