import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useLocations = () => {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState({})
    const [characters, setCharacters] = useState([])


    const getRandomLocation = () => {
        return Math.round((Math.random() * 125) + 1)
    }
    const getIds = () => {
        return data.residents?.map(r => parseInt(r.split('/').at(-1))).join(',')
    }

    const requestLocation = (url)=> {
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }
    const requestData = () => requestLocation(`https://rickandmortyapi.com/api/location/${index}`)
    const random = () => requestLocation(`https://rickandmortyapi.com/api/location/${getRandomLocation()}`)


    useEffect(() => requestData(), [])
    useEffect(() => {
        const ids = getIds()
        if (ids)
            axios.get(`https://rickandmortyapi.com/api/character/${ids}`)
                .then(res => {
                    if (Object.getPrototypeOf(res.data) === ({}).__proto__) setCharacters([res.data])
                    else setCharacters(res.data)
                })
                .catch(err => console.log(err))
        else setCharacters([])
    }, [data])
    useEffect(()=>requestData(),[index])
    

    return { data, random, characters, setIndex }
};

export default useLocations;