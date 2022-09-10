import { useState, useEffect } from 'react'
import './App.css'
import Box from '@mui/material/Box';

import JHeader from './components/JHeader'
import Card from './components/Card'
import useLocations from './hooks/useLocations';
import JLocation from './components/JLocation';
import JFooter from './components/JFooter';
import JPaginator from './components/JPaginator';
import usePaginator from './hooks/usePaginator';

function App() {
    const [headerFloatting, setHeaderFloatting] = useState(false)
    const [paginationTotal, setPaginationTotal] = useState(0)
    const {
        data: location,
        random,
        characters,
        setIndex } = useLocations()
    const {
        pageData,
        setData,
        index: pgIndex,
        setIndex: setPgIndex,
        total: pgTotal } = usePaginator(12)

    const renderCards = () => {
        if (pageData.length > 0)
            return pageData?.map(character => <Card key={character.id} character={character} />)
        else
            return (<h2>No informstion to show!</h2>)
    }
    const randonLocation = () => {
        return Math.round(Math.random() * (125)) + 1
    }


    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= 200) setHeaderFloatting(true)
            else setHeaderFloatting(false)
        })
        setTimeout(() => {
            setIndex(randonLocation())
        }, 1000)
    }, [])
    useEffect(() => {
        setData(characters)
    }, [characters])

    return (<div className="App">
        <JHeader call={setIndex} floatting={headerFloatting} />
        <main style={{ marginTop: headerFloatting ? '20rem' : '0' }}>
            <JLocation location={location} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: '1rem',
                    padding: '0 2rem',
                    maxWidth: '1250px',
                    '& > :not(style)': {
                        m: 1,
                        width: '15rem',
                        height: '30rem',
                    },
                }}>
                {
                    renderCards()
                }
            </Box>
            <JPaginator
                current={{
                    data: pgIndex,
                    setter: setPgIndex
                }}
                total={pgTotal} />
        </main>
        <JFooter />
    </div>)
}

export default App
