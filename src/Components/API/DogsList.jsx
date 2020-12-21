import React from 'react'
import Dog from "./Dog"

function DogsList({ title, dogs}) {
    return (
        <section className="section">
            <h2 className="section-title">{title}</h2>
            <div className="dogs-center">
                {
                    dogs.map(item => {
                        return (
                            <Dog key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default DogsList;
