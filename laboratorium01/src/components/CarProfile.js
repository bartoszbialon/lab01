import React from 'react';

const CarProfile = ({ car }) => {
    return (
        <div style={styles.container}>
            <h2>Car ID: {car.id}</h2>
            <p><strong>Model:</strong> {car.model}</p>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Color:</strong> {car.color}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        padding: '16px',
        margin: '16px 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px'
    }
};

export default CarProfile;
