import React, { useContext } from 'react';
import { apiProvider } from '../../ApiProvider/ApiProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { loder,  country}=useContext(apiProvider);
    return (
        <div className='text-center mt-4 text-2xl font-bold'>
            {
                loder&&<span className="loading loading-spinner text-accent"></span>
            }
            <h2>Total country {country.length} </h2>

            <div className='mt-4'>
                <Link to={"/country"}><button className='btn btn-secondary'>Details</button></Link>
            </div>
        </div>
    );
};

export default Home;