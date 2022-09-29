import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 import Navbar from "./Navbar";

const Profile = () => {
  
 let item = JSON.parse(localStorage.getItem("key"));
 //const us= JSON.parse(localStorage.getItem("username"));
 
 
  console.log("visitor id "+item.data.visitorId);
  console.log("dsgshdf"+item.data.review.description);
  const [user, setUser] = useState({

  aadharno: "",
  name: "",
  mobno: "",
  email:"",
  username:"",
  password:"",
 
  });
  
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get( `http://localhost:8083/visitor/find.paradise/${item.data.username}`);
    setUser(res.data);
  };

 
  //Booking
  const [user2, setUser2] = useState([{

    bookingPrice: "",
    bookingDate: "",
    eventName: "",
    campName: ""
    
    }]);
    
   
    const loadUser2 = async () => {
      const rev = await axios.get( `http://localhost:8080/booking/find.paradise2/${item.data.username}`);
      setUser2(rev.data);
    };
    useEffect(() => {
      loadUser2();
    }, []);
    console.log(" booking deatails "+user2.bookingPrice)


    //review
    const [user1, setUser1] = useState([{

      description: ""
      
      }]);
      
      const loadUser1 = async () => {
        const rev = await axios.get( `http://localhost:8080/review/find.paradise/${item.data.visitorId}`);
        setUser1(rev.data);
      };
      useEffect(() => {
        loadUser1();
      }, []);

  return (
<div>

<Navbar  />
 <div class="container mt-3">
   <h2>Welcome {item.data.name}</h2>
   <Link to="update" state={item.data} class="btn btn-primary" >Update Profile</Link>
   <table class="table table-striped">
   <thead>
    <tr>
     <th>AadharNo.</th>
     <th>Name</th>
     <th>MobileNo.</th>
     <th>Email</th>
     <th>UserName</th>
     <th>Password</th>
     
    </tr>
    </thead>
  <tbody>
    
  <tr>
       <td>{item.data.aadharno}</td>
       <td>{item.data.name}</td> 
       <td>{item.data.mobno}</td> 
       <td>{item.data.email}</td>
       <td>{item.data.username}</td>
       <td>{item.data.password}</td>
         
              
      </tr>
     </tbody>
    </table>

   {/* review table */}

<h1>Your Reviews</h1>

    <table class="table table-striped">
    <thead>
    <tr>
     <th> </th>
     
    </tr>
    </thead>
  <tbody>
    
      {
    user1.map(

      val => <tr   >
       <td>{val.description}</td> 

        </tr>
      )}
      
     </tbody>
    </table>




{/* Bookings */}
<h1>Your Bookings</h1>
    <table class="table table-striped">
    <thead>
    <tr>
       <th>Booking Price</th> 
       <th>Booking Date</th>
       <th>Event Name</th>
      
    </tr>
    </thead>
  <tbody>
    
  
      {
    user2.map(

      val => <tr  >
       <td>{val.bookingPrice}</td> 
       <td>{val.bookingDate}</td>
       <td>{val.eventName}</td>
     
       </tr>
      )}
      
     </tbody>
    </table>

    </div>
   </div>
  );
};



export default Profile;







