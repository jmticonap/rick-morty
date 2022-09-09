import { useState, useEffect } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import JHeader from './components/JHeader'
import Card from './components/Card'
import useLocations from './hooks/useLocations';
import JLocation from './components/JLocation';

function App() {
    const {
        data: location,
        requestData,
        characters } = useLocations()

    const renderCards = ()=>{
        console.log("CANTIDAD DE PERSONAJES")
        console.log(characters);
        if(characters.length>0)
            return characters?.map(character => <Card key={character.id} character={character} />)
        else
            return (<h2>No informstion to show!</h2>)
    }


    return (<div className="App">
        <JHeader />
        <main>
            <JLocation location={location} random={requestData} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: '1rem',
                    padding: '0 2rem',
                    '& > :not(style)': {
                        m: 1,
                        width: '15rem',
                        height: '30rem',
                    },
                }}
            >
                {
                    renderCards()
                }

            </Box>
        </main>
    </div>)
}

export default App
