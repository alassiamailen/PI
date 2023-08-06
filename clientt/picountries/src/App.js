import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './views/Home/Home';
import Create from './views/Create/Create';
import Details from './views/Details/Details'
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';







function App() {
 
  const location= useLocation();
  const isLanding = location.pathname !=='/';
  return (
    <div>  
      
      { isLanding && <Route path={"*"} component={Navbar}/>}
      <Switch>        
        <Route exact path={"/"} component={Landing}/>
        <Route path={"/home"} component={Home}/>
        <Route path={"/create"} component={Create}/>
        <Route path={"/details"} component={Details}/>        
      </Switch>    
      
    </div>
  );
}

export default App;
