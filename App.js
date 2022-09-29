
import SignIn from "./Signin";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes,Navigate  } from "react-router-dom";
import FooterPage from "./FooterPage";
import Homepage from "./Homepage";
import VisitorList from "./VisitorList";
import AdminLogin from "./AdminLogin";
import VisitorUpdate from "./VisitorUpdate";
import EventList from "./EventList";
import EventAdd from "./EventAdd";
import EventUpdate from "./EventUpdate";
import Navbar from "./Navbar";
import Homepage2 from "./HomePage2";
import Review from "./Review";
import Profile from "./Profile";
import AboutUs from "./AboutUS";
import AdminNav from "./AdminNav";
import Abt2 from "./Abt2";
import R2 from "./R2";
import BShowCart from "./BShowCart"


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
              ></Route>
      
            <Route
            path="/homepage2"
            element={<Homepage2 />}
              ></Route>

            <Route
            path="/abt2"
            element={<Abt2 />}
              ></Route>

              
            <Route
            path="/r2"
            element={<R2 />}
              ></Route> 
      
           <Route
            path="/profile"
            element={             
            <Profile />
                     }
          ></Route>

            <Route
            path="/aboutus"
            element={<AboutUs />}
          ></Route>

<Route path="/Showcart" element={<BShowCart />}></Route>
 
<Route path="/Booking" element={<BShowCart />}></Route>

            <Route
            path="/AdminLogin"
            element={<AdminLogin />}
          ></Route>

          <Route
            path="List"
            element={<VisitorList />}
          ></Route>
          
          <Route
            path="profile/update"
            element={<VisitorUpdate />}            
          ></Route>

          
          <Route
            path="list/eventlist"
            element={<EventList />}            
          ></Route>

          <Route
            path="eventAdd"
            element={<EventAdd />}            
          ></Route>

            <Route
            path="/list/eventlist/EventUpdate"
            element={<EventUpdate />}            
          ></Route>


           
           <Route
            path="review"
            element={ 
         
            <Review />
            }            
            ></Route>
           
          
          

          <Route
            path="/AdminNav"
            element={<AdminNav />}            
          ></Route>

         
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          
          
        </Routes>
      </BrowserRouter>
      <FooterPage />
      
    </div>
  );
}



export default App;
