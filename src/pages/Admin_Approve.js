import React from "react";
import Header from "../components/Header";
import PropCard from "../components/PropCard";

const Admin_Approve = () => {
  const propertyData = [
    {
      name: "Adi Emerald homes",
      description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
      cost: "50000",
      area: "12500",
      estimatedEmi: "5000",
      direction: "North",
      apartmentType: "3 BHK",
      noOfBathrooms: "3",
      parkingAvailable: true,
    },
    {
      name: "Lalitha homes",
      description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
      cost: "50000",
      area: "12500",
      estimatedEmi: "5000",
      direction: "North",
      apartmentType: "3 BHK",
      noOfBathrooms: "3",
      parkingAvailable: true,
    },{
      name: "Kakani nagar homes",
      description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
      cost: "50000",
      area: "12500",
      estimatedEmi: "5000",
      direction: "North",
      apartmentType: "3 BHK",
      noOfBathrooms: "3",
      parkingAvailable: true,
    },{
      name: "Vasu homes",
      description: "Best homes in vicinity of Jubilee hills in Hyderabad and 3 BHK for 50,000/- only!",
      cost: "50000",
      area: "12500",
      estimatedEmi: "5000",
      direction: "North",
      apartmentType: "3 BHK",
      noOfBathrooms: "3",
      parkingAvailable: true,
    },
  ];

  return (
    <div>
      <Header />
      <div class="PropCard-field">
      {propertyData.map((property, index) => (
        <PropCard key={index} propertyData={property} />
      ))}
      </div>
    </div>
  );
};

export default Admin_Approve;
