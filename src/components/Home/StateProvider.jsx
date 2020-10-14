//cài dữ liệu layer
//we need this to track cart

import React, { createContext, useContext, useReducer } from "react";



//dữ liệu layer
export const StateContext = createContext();

// xây dựng provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside of compnent
export const useStateValue = () => useContext(StateContext);