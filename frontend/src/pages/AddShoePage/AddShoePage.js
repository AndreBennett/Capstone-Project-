import React from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import useAuth from "../../hooks/useAuth"
import useCustomFrom from "../../hooks/useCustomForm"

let initialValues = {
    brand: '',
    model: '',
    price: '',
    color: '',
    size: '',
};

const AddShoePage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomFrom(initialValues)

    async function postNewShoe(){
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/shoes/', formData, {
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            })
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container">
            <h2>{user.username}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Brand:{" "}
                <input 
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Model:{" "}
                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Price:{" "}
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </label> 
                <label>
                    Color:{" "}
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                    />
                </label> 
                <label>
                    Size:{" "}
                    <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                    />
                </label>
                <button>Search for Shoe</button>
            </form>
        </div>
    );

}

export default AddShoePage