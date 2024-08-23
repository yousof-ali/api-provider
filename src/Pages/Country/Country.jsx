import React, { useContext } from 'react';
import { apiProvider } from '../../ApiProvider/ApiProvider';
import SingleCountry from '../../Components/SingleCountry/SingleCountry';

const Country = () => {
    const {loder,country}=useContext(apiProvider);
    const sliceArray = country.slice(0,11);
    return (
        <div>
            {
              loder&&<div className='text-center mt-6'>
                <span className="loading loading-spinner text-accent"></span>
              </div>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-6'>
               {
                country.slice(0,12).map((singlecountry , indx) => <SingleCountry key={indx} country={singlecountry}></SingleCountry>)
               }

            </div>
        </div>
    );
};

export default Country;