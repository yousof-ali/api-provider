import React from 'react';

const SingleCountry = ({country}) => {
    const {name}=country;
    return (
        <div className='border shadow-md  text-center'>
            <span className='font-bold'>{name.common}</span>
            <div className=' mb-3 flex items-center justify-center'>
                <img className='w-[100px]' src={country.flags.png} alt="" />
            </div>
            <p>Capital : <span className='font-bold'>{country.capital}</span></p>
            <p>Population : <span className='font-bold'>{country.population}</span></p>

        </div>
    );
};

export default SingleCountry;