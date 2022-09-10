import * as React from 'react';
import {useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const JInputText = ({onSearch}) => {
    const [value, setValue] = useState('')

    const keyDown = e => {
        if(e.key === 'Enter'){
            onSearch(value)
        }
    }
    
    return (
        <Paper
            
            sx={{ 
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 800, 
                height:'4rem', 
                marginBottom: '2rem' }}>
            
            <InputBase
                sx={{ ml: 1, flex: 1 , fontSize: '1.5rem'}}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={e=>setValue(e.target.value)}
                onKeyDown={keyDown}
            />
            <IconButton 
                type="button" 
                sx={{ p: '10px' }} 
                aria-label="search"
                onClick={()=>onSearch(value)}>
                <SearchIcon />
            </IconButton>
            
        </Paper>
    );
};

export default JInputText;