import { createContext, useState, useContext } from 'react';
const linkContext = createContext();
export function useLinkContext() {
    return useContext(linkContext)
}

export function LinkProvider({ children }) {
    const [link, setLink] = useState({
        link: ["W", "e", "l", "c", "o", "m", "e", "!"],
        loop: true,
        
    })
    console.log("context",link);
    const to = {
        link, setLink
    };
    return (
        <linkContext.Provider value={to}>
            {children}
        </linkContext.Provider>
    )
}