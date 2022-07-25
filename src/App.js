import {
   Routes,
   Route,
 } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
function App(){
    return (
       <div>
          <Header></Header>
         <div className="mt-4">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="About" element={<About />} />
               <Route path="Contact" element={<Contact />} />
            </Routes>
         </div>
       </div> 
    );
}
export default App;