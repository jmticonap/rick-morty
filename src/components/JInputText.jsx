import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const JInputText = () => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, height:'4rem', marginBottom: '2rem' }}>
            
            <InputBase
                sx={{ ml: 1, flex: 1 , fontSize: '1.5rem'}}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            
        </Paper>
    );
};

export default JInputText;