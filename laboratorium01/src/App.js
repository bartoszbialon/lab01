import React from 'react';
import CarProfile from './components/CarProfile.js'; 
import { data } from './module-data.js'; 

const App = () => {
    return (
        <div>
            <h1>Car Profiles</h1>
            {/* Mapowanie przez tablicę danych i generowanie komponentów CarProfile */}
            {data.map(car => (
                <CarProfile key={car.id} car={car} />
            ))}
        </div>
    );
};

export default App;
