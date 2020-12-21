import React from 'react';
import "./Dog.css"

function Dog({ id, name, origin, image}) {
    const url = image.url;
    return (
        <article className="dog">
            <div className="img-container">
                <img src={url} alt={name} />
            </div>
            <div className="dog-footer">
                <p className="dog-title">Name: {name}</p>
                <p className="dog-price">Origin: {origin}</p>
            </div>
        </article>
    )
}

export default Dog;
