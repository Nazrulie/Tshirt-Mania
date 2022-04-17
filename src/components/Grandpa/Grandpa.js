import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';


// context api
// 1. call createrContext with a default value
// 2. set a variable of the context with uppercase
// 3. Make sure you  wxport the context  to use it in other places
// 4. Wrap you child content using RingContext.Provider
// 5. Provide a value 
// 6. to consume the context from child component
// 7. UseContext hook and you need to pass the constextName
// 8. Make sure you teke notes...

export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornaments = 'Diamond Ring';

    const handleBuyaHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>

                <p>House: {house} <button
                    onClick={handleBuyaHouse}
                >Buy a House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;