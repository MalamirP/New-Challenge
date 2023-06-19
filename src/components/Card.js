import './Card.css'
function Card(props) {
    return (
        <div className="card">
            <img src={props.imgsrc} alt="Card" />
            <button className="btn-img">{props.btnCategory}</button>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.pContent}</p>
                <button className="view-category-btn">{props.btnViewCategory}</button>
            </div>
        </div>
    );
}

export default Card