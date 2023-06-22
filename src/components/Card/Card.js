import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Card.css'


function Card(props) {

    return (
        <div className='flex-row-container'>
            <div className="card">
                <img src={props.imgsrc} alt="Card" />
                <button className="btn-img">{props.btnCategory}</button>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.pContent}</p>
                    <Link to="view-category" className="view-category-btn">View Category</Link>
                </div>
            </div>
        </div>
    );
}

export default Card