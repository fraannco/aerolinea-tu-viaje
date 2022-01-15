import React from 'react'
import FlightsContext from '.'

const FlightsProvider = ({ children }) => {
    return (
        <FlightsContext.Provider value={{ showAlert: () => alert(10) }}>
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider
