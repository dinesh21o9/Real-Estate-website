import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PropCard from "../components/PropCard";
import axios from "axios";

const Dashboard = () => {

  // const propertyData = [
  //   {
  //     name: "Adi Emerald homes",
  //     description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
  //     cost: "50000",
  //     area: "12500",
  //     estimatedEmi: "5000",
  //     direction: "North",
  //     apartmentType: "3 BHK",
  //     noOfBathrooms: "3",
  //     parkingAvailable: true,
  //   },
  //   {
  //     name: "Lalitha homes",
  //     description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
  //     cost: "50000",
  //     area: "12500",
  //     estimatedEmi: "5000",
  //     direction: "North",
  //     apartmentType: "3 BHK",
  //     noOfBathrooms: "3",
  //     parkingAvailable: true,
  //   },{
  //     name: "Kakani nagar homes",
  //     description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
  //     cost: "50000",
  //     area: "12500",
  //     estimatedEmi: "5000",
  //     direction: "North",
  //     apartmentType: "3 BHK",
  //     noOfBathrooms: "3",
  //     parkingAvailable: true,
  //   },{
  //     name: "Vasu homes",
  //     description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
  //     cost: "50000",
  //     area: "12500",
  //     estimatedEmi: "5000",
  //     direction: "North",
  //     apartmentType: "3 BHK",
  //     noOfBathrooms: "3",
  //     parkingAvailable: true,
  //   },
  // ];



  const [prop, setProp] =useState([]);

  useEffect(()=>{
      getProp();
  },[]);

  function getProp(){
    axios
    .get('http://localhost:80/api/property/')
    .then(function(response){
        console.log(response.data);
        setProp(response.data);
      });
  }

  return (
    <div>
      <Header />
      <div class="PropCard-field">
      { prop.map((property,key) => (
        <PropCard key ={key} property={property} />
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
