import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShoeDetailsPage = () => {
    const {shoeId} = useParams();
        const [shoe, setShoe] = useState({})
        useEffect(() => {
            const fetchShoes = async () => {
                try {
                    let response = await axios.get(
                        `https://jsonplaceholder.typicode.com/shoes/${shoeId}`);
                        setShoe(response.data)

                } catch (error) {
                     console.log(error)
                    
                }
            }

            fetchShoes()

        }, [shoeId])
    return (
        <div>
            <h1>Shoe: {shoe.brand}</h1>
            <Link to={'/homepage'}>Back to HomePage</Link>
        </div>
    );
};

export default ShoeDetailsPage