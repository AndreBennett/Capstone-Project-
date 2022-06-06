import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShoePage = () => {
    const [shoes, setShoes] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                let response =await axios.get(
                    'http://127.0.0.1:8000/api/shoes/'
                );
                setShoes(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShoes();
    }, []);

    const handleClick = (shoe) => {
        navigate(`/details/${shoe.Id}`, {
            state: {
                brand: shoe.brand,
                model: shoe.model.brand
            }
        });

    };
    return (
        <div>
            <h1>All Shoes</h1>
            {shoes && 
            shoes.map((shoe) => {
                return (
                <li key={shoe.Id}>
                    <button onClick={() => handleClick(shoe)}>Information for {shoe.brand}</button>
                    <Link to={`/details/${shoe.Id}`}>{shoe.brand}</Link>;
                </li>
                );                
            })}
        </div>
    );
};

export default ShoePage; 