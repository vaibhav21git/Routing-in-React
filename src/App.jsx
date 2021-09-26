import React  from "react";
import { Route , Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Name from './Name'
import Error from './Error'
import Navbar from './Navbar'
import './index.css';


 
const App = () =>
{
    return (
      <> 
          <Navbar/>
           <Switch>

                <Route  exact path = '/' component ={()=><About name ="Abbout" />}/>
               <Route exact  path = '/contact' render ={Contact}/>  
               <Route exact  path = '/contact/name' component ={Name}/>
               <Route component = {Error} />
            </Switch>
      </>
    )

}; 

export default App;

// render is better than component because render (modifies) after on time 2 time onwards it modifies the page but component creates a new page
// if u want props then try to use the render otherwise use the component

 