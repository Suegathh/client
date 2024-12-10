import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({ data }) => {
                setUser(data)
            })
                .catch((error) => {
                    console.error('Error fetching profile:', error);
                });
        }
    }, [])
    return (
        <UserContext.Provider value={{user, setUser}}>

            {children}

        </UserContext.Provider>
    )
}