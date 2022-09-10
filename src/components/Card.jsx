import React from 'react';
import './css/Card.css'
import Paper from '@mui/material/Paper';

const Card = ({character}) => {
    const status_color = {Alive: '#4AB648',Dead:'#B94343',unknown:'#938686'}
    const renderCard = ()=>{
        if(Object.keys(character).length>0)
            return (
                <>
                    <div className='card__img'>
                        <div className='card__status_character'>
                            <div 
                                className='card__status_character_indicator'
                                style={{backgroundColor:status_color[character?.status]}}>{' '}</div>
                            <h5>{character?.status}</h5>
                        </div>
                        <img src={character?.image} />
                    </div>
                    <div className='card__data'>
                        <ul>
                            <li><h2>{character?.name}</h2><hr /> </li>
                            <li><h5>SPECIE</h5></li>
                            <li>{character?.species}</li>
                            <li><h5>ORIGIN</h5></li>
                            <li>{character?.origin.name}</li>
                            <li><h5>APPEARE QUANTITY</h5></li>
                            <li>{character?.episode.length}</li>
                        </ul>
                    </div>
                </>
            )
    }

    return (
        <Paper elevation={3} sx={{
            overflow: 'hidden',
            backgroundColor: 'var(--card-background)', 
            borderRadius: '0.5rem'}}>
            {renderCard()}
        </Paper>
    );
};

export default Card;