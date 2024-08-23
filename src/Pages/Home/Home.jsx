import React, { useContext } from 'react';
import { apiProvider } from '../../ApiProvider/ApiProvider';

const Home = () => {
    const { loder,  country}=useContext(apiProvider);
    return (
        <div className='text-center mt-4 text-2xl font-bold'>
            {
                loder&&<span className="loading loading-spinner text-accent"></span>
            }
            <h2>Total country {country.length} </h2>
        </div>
    );
};

export default Home;