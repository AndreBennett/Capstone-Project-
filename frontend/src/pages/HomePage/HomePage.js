import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/shoes/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setShoes(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchShoes();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      < Link to='/details'>Shoe Details</Link>
      {shoes &&
        shoes.map((shoe) => (
          <p key={shoe.id}>
            {shoe.brand} {shoe.model} {shoe.price} {shoe.color} {shoe.size}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
