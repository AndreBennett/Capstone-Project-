import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShoePage = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                let response =await axios.get(
                    'https://jsonplaceholder.typicode.com/shoes'
                );
                setShoes(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShoes();
    }, []);
    return (
        <div>
            <h1>All Shoes</h1>
            {shoes && 
            shoes.map((shoe) => {
                return <Link to={`/details/${shoe.id}`} key={shoe.id}>{shoe.name}</Link>;
            })}
        </div>
    );
};

export default ShoePage; 