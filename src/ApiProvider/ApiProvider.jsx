import React, { createContext, useEffect, useState } from 'react';

export const apiProvider = createContext()

const ApiProvider = ({children}) => {

    const [country,setcountry]=useState([]);
    const [loder,setloder]=useState(true);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((data)=>{
            setcountry(data);
            setloder(false);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    },[])

    const values = {country,loder}
    return (
        <apiProvider.Provider value={values}>
            {children}
        </apiProvider.Provider>
    );
};

export default ApiProvider;