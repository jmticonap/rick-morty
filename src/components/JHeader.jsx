import React, {useState, useEffect} from 'react';
import './css/JHeader.css'
import Img1 from "../assets/img/633288.png"
import Img2 from "../assets/img/633294.png"
import Img3 from "../assets/img/796108.jpg"
import Img4 from "../assets/img/909641.png"

import Fab from '@mui/material/Fab'
import Shuffleicon from '@mui/icons-material/Shuffle'
import JInputText from './JInputText'

const JHeader = ({call, floatting}) => {
    const [currentBg, setCurrentBg] = useState()
    const backgrounds = [Img1,Img2,Img3,Img4]
    //Random Background
    const random_background = ()=>{
        setCurrentBg( backgrounds[Math.round(Math.random()*(backgrounds.length-1))] )
    }
    const randonLocation = ()=>{
        return Math.round(Math.random()*124)+1
    }

    useEffect(()=>random_background(),[])

    return (
        <header className={`cover-page ${floatting?'cover-page_static':''}`} style={{backgroundImage: `url('${currentBg}')` }}>
            <JInputText onSearch={call} />
            <Fab
                style={{position:'relative', bottom:'-4.5rem', right:'-16.75rem'}} 
                color='success' 
                onClick={()=>call(randonLocation())}>
                <Shuffleicon />
            </Fab>
        </header>
    );
};

export default JHeader;