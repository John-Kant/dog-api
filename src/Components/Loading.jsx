import React from 'react'
import loading from "../images/loading.gif"

function Loading() {
    return (
        <div className="loading">
            <h2>Fetching Data. Please wait...</h2>
            <img src={loading} alt="loading gif" />
        </div>
    )
}

export default Loading;
