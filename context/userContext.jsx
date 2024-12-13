import axios from "axios";
import { createContext, useState, useEffect } from "react";

axios.defaults.baseURL = "https://mern-server-peach.vercel.app"; 
axios.defaults.withCredentials = true;

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    isAuthenticated: false
});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/profile')
            .then(({ data }) => {
                setUser(data);
                setIsAuthenticated(true);
            })
            .catch((error) => {
                console.error('Error fetching profile:', error);
                setIsAuthenticated(false);
                setError('Failed to fetch profile');
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
}
