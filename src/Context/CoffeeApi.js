import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoffeeContext = createContext([]);

export const CoffeeProvider = ({ children }) => {

    const [coffee, setCoffee] = useState([{ id: 0, name: "", image: "", price: 0, rating: 0, votes: 0, pupular: false, available: false }]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => {
                // handle success
                setCoffee(response.data);
            })
    }, []);

    return (
        <CoffeeContext.Provider value={{ coffee }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export const useCoffee = () => {
    return useContext(CoffeeContext);
};
