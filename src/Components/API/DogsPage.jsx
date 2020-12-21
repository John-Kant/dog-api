import React, { useContext } from 'react';
import { DogContext } from "./ContextApi"
import Loading from "../Loading"
import DogsList from "./DogsList"

function Dogs() {
    const { loading, dogs} = useContext(DogContext);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <DogsList title="our dogs" dogs={dogs} />
    )
    
}

export default Dogs;
