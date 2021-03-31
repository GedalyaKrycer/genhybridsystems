import React, { useContext, useState } from "react";

const GHSContext = React.createContext();

export const useGHStContext = () => {
    return useContext(GHSContext);
};


export function GHSProvider({ children }) {

    // State that controls if modal should open/close
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <GHSContext.Provider
            value={{
                modalOpen,
                setModalOpen
            }}
        >
            {children}
        </GHSContext.Provider>

    );
}
