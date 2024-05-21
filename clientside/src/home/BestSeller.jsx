import React, { useState, useEffect } from 'react';
import Goodscard from '../components/Goodscard';
// import '.home/BestSeller.css'
const BestSeller = () => {
    const [good, setGood] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/all-items")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(data => setGood(data.slice(0, 4)))
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>; 
    }

    return (
        <div className='w-100% h-100% text-center '>
            <Goodscard good={good} headline="Popular item" />
        </div>
    );
}

export default BestSeller;
