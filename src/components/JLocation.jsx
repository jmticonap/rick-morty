import React from 'react';
import './css/JLocation.css'
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Shuffleicon from'@mui/icons-material/Shuffle'

const JLocation = ({location}) => {
    return (
        <Paper elevation={6} sx={{
            overflow: 'hidden',
            maxWidth: '90vw',
            backgroundColor: 'var(--card-background)', 
            borderRadius: '0.5rem', 
            padding: '2rem 8rem'}}>
            <ul className='location__data'>
                <li>
                    <h2>Name:</h2>
                    <p>{location.name}</p>
                </li>
                <li>
                    <h2>Type:</h2>
                    <p>{location.type}</p>
                </li>
                <li>
                    <h2>Dimension:</h2>
                    <p>{location.dimension}</p>
                </li>
                <li>
                    <h2>Population:</h2>
                    <p>{location.residents?.length}</p>
                </li>
            </ul>
        </Paper>
    );
};

export default JLocation;