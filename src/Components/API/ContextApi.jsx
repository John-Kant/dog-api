import React, { useState, useEffect } from 'react'
import axios from "axios"

export const DogContext = React.createContext();

const url = "https://api.thedogapi.com/v1/breeds";

function DogProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
          .get(url)
          .then(response => {
              setDogs(response.data);
              setLoading(false);
          });
        return () => {} // clean up action 
    }, []);

    return (
        <DogContext.Provider value={{ loading, dogs }}>
            { children }
        </DogContext.Provider>
    )
}

export default DogProvider;























// import React, { useState} from 'react'
// import Axios from "axios"

// const url = "https://api.thedogapi.com/v1/breeds";

// function Api() {
//     const [dog, setDog] = useState("");
    
//     const getDog = () => {
//         Axios.get(url).then(
//             (response) => {
//                 console.log(response);
//                 setDog(response.data);
//             }
//         )
//     }
    
//     return (
//         <div>
//             {dog}
//         </div>
//     )
// }
// export default Api;
