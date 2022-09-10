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
    const location_names = ['Earth (C-137)', 'Abadango', 'Citadel of Ricks', "Worldender's lair", 'Anatomy Park', 'Interdimensional Cable', 'Immortality Field Resort', 'Post-Apocalyptic Earth', 'Purge Planet', 'Venzenulon 7', 'Bepis 9', 'Cronenberg Earth', 'Nuptia 4', "Giant's Town", 'Bird World', 'St. Gloopy Noops Hospital', 'Earth (5-126)', "Mr. Goldenfold's dream", 'Gromflom Prime', 'Earth (Replacement Dimension)', 'Testicle Monster Dimension', 'Signus 5 Expanse', 'Earth (C-500A)', "Rick's Battery Microverse", 'The Menagerie', 'Earth (K-83)', 'Hideout Planet', "Unity's Planet", 'Dorian 5', 'Earth (Unknown dimension)', 'Earth (J19ζ7)', 'Roy: A Life Well Lived', 'Eric Stoltz Mask Earth', "Earth (Evil Rick's Target Dimension)", 'Planet Squanch', 'Glaagablaaga', 'Resort Planet', 'Interdimensional Customs', 'Galactic Federation Prison', 'Gazorpazorp', 'Hamster in Butt World', 'Earth (Giant Telepathic Spiders Dimension)', 'Alphabetrium', 'Jerryboree', 'Krootabulon', "Zigerion's Base", 'Pluto', 'Fantasy World', "Zeep Xanflorp's Miniverse", "Kyle's Teenyverse", "Larva Alien's Planet", 'Earth (K-22)', 'Mr. Meeseeks Box', "Vindicator's Base", 'Pawn Shop Planet', 'Mega Gargantuan Kingdom', 'Gear World', 'Earth (D-99)', 'Earth (D716)', 'Earth (D716-B)', 'Earth (D716-C)', 'Earth (J-22)', 'Froopyland', 'Detoxifier', 'Trunk World', 'Plopstar', 'Blips and Chitz', 'Girvonesk', 'Earth (C-35)', "Snuffles' Dream", 'Earth (Pizza Dimension)', 'Earth (Phone Dimension)', 'Greasy Grandma World', 'Earth (Chair Dimension)', 'Árboles Mentirosos', 'Alien Day Spa', 'Earth (Fascist Dimension)', 'Snake Planet', 'Forbodulon Prime', 'Earth (Fascist Shrimp Dimension)', 'Earth (Fascist Teddy Bear Dimension)', 'Earth (Wasp Dimension)', 'Monogatron Mothership', 'Gorgon Quadrant', 'Midland Quasar', 'Mount Space Everest', 'Globaflyn', 'Heist-Con', 'Heistotron Base', 'Mount Olympus', 'Plitzville Montana', 'Earth (Tusk Dimension)', 'Gramuflack', 'Draygon', 'New Improved Galactic Federation Quarters', 'Story Train', 'Non-Diegetic Alternative Reality', 'Tickets Please Guy Nightmare', 'Morty’s Story', 'Ricks’s Story', 'Glorzo Asteroid', 'Alien Acid Plant', 'Merged Universe', 'Near-Duplicate Reality', 'NX-5 Planet Remover', 'Gaia', "Defiance's Ship", "Defiance's Base", 'The Ocean', 'Narnia Dimension', 'Elemental Rings', 'Morglutz', 'Ferkus 9', 'Morty', 'Space', 'Hell', 'Z. Q. P. D.', 'Space Tahoe', 'France', "Birdperson's Consciousness", "Rick's Consciousness", 'Avian Planet', 'Normal Size Bug Dimension', 'Slartivart', 'Rick and Two Crows Planet', "Rick's Memories"]
    const [currentBg, setCurrentBg] = useState()
    const backgrounds = [Img1,Img2,Img3,Img4]
    //Random Background
    const random_background = ()=>{
        return backgrounds[Math.round(Math.random()*(backgrounds.length-1))]
    }
    const randonLocation = ()=>{
        setCurrentBg(backgrounds[  Math.round(Math.random()*(location_names.length-1))+1  ])
    }

    useEffect(()=>setCurrentBg(random_background()),[])

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