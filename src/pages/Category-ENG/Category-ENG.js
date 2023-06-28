import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import Card from "../../components/Card/Card"

import './Category-ENG.css'




export default function Category() {

    const [categories, setCategories] = useState([]);

    const token = sessionStorage.getItem('token');

    useEffect(() => {
        fetch('http://188.166.21.103:4000/category?language=en', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.categories);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);




    return (
        <div className="category-page">
            <h2 className='header'>Events causing Global Warming</h2>
            {/* Render the card list */}
            {categories.map(item => (
                <Card
                    key={item._id}
                    imgsrc={`http://188.166.21.103:4000/${item.imageId}.jpeg`}
                    btnCategory={item.name}
                    title={item.title}
                    pContent={item.desc}
                >
                </Card>
            ))}
        </div>
    )
}