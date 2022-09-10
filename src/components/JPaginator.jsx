import React from 'react';
import './css/JPaginator.css'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos'

const JPaginator = ({current, total}) => {

    const onBack = ()=>{
        current.setter(current.data-1)
    }
    const onForward = ()=>{
        current.setter(current.data+1)
    }

    return (
        <Paper
            sx={{ p: '2px 4px', 
            backgroundColor: 'var(--card-background)',
            color: '#fff',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '95vw' }}>
                <ul className='paginator__btns-row'>
                    <li>
                        <IconButton 
                            type="button" 
                            sx={{ p: '10px' }} 
                            onClick={onBack}>
                            <ArrowBackIcon sx={{fill:'#FFF'}} />
                        </IconButton>
                    </li>
                    <li>                        
                        <span>{current.data}</span>{' / '}
                        <span>{total}</span>
                    </li>
                    <li>
                        <IconButton 
                            type="button" 
                            sx={{ p: '10px' }} 
                            onClick={onForward}>
                            <ArrowForwardIcon sx={{fill:'#FFF'}} />
                        </IconButton>
                    </li>
                </ul>
        </Paper>
    );
};

export default JPaginator;