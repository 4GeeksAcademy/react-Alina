import React from "react";

const Card = () =>{
    return (
        <div className="g-col-3">
            <div className="card">
                <img src="https://th.bing.com/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card