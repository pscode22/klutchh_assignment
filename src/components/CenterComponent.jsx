import React, { useState, useEffect } from 'react';
import '../styles/components_styles/CenterComp.css';
import liquid from '../styles/images/liquid.svg';
import versus from '../styles/images/VS.svg';
import sentinels from '../styles/images/sentinels.svg';
import axios from 'axios';

export default function CenterComponent() {

    const [score, setScore] = useState(0);
    const [obj, setObj] = useState({});

    useEffect(() => {

        axios("https://api.klutchh.in/v1/rosters/128622/129859?game_type=false")
        .then(res => setObj({...res, statusText: "OK"}))
        .catch(err => setObj({...err, statusText: "ERROR"}))

    },[]);

    const handleClick = (e,credit) => {
        let creditAdded = score + credit;
        let maxCredit = 15;
        let cardBackground = e.currentTarget.style.background;

        if(cardBackground === "rgb(0, 0, 0)") {
            setScore(score - credit);
            e.currentTarget.style.background = "";
            return;
        }
        else {
            return (
            creditAdded <= maxCredit? 
            (setScore(creditAdded), e.currentTarget.style.background = "rgb(0, 0, 0)")
            :
            alert("Credit limit reached")
            )
        }
    }

  return (
    <div className='heroBox'>
        <div className='heroHeader'>
          <p>Create Team</p>
        </div>

        <div className='heroContent'>

            <div className='creditBox'>
                <div className='creditScoreCard'>
                  <p>CREDITS LEFT : {score}/15 </p>
                </div>
            </div>

            <div className='teamInfo'>

                <div className='teamNames'>
                    <div className='team'>
                        <div style={{background : "#FFEE00", height : "40px", width : "165px"}}>  
                        </div>
                        <div>
                            <img src={liquid} alt="teamLogo" />
                        </div>
                        <div style={{width : "100px", color : "#FFFFFF"}}>
                        <p>Team Liquid</p>
                        </div>
                    </div>

                    <div className='versus'>
                        <img src={versus} alt="vs.png" />
                    </div>

                    <div className='team' style={{flexDirection : "row-reverse"}}>

                        <div style={{background : "#CE0037", height : "40px", width : "163px"}}>  
                        </div>
                        <div>
                            <img src={sentinels} alt="teamLogo" />
                        </div>
                        <div style={{width : "100px", color : "#FFFFFF"}}>
                        <p>Sentinels</p>
                        </div>
                    </div>
                </div>

                <div className='playerInfo'>

                    <div className='cardCollection'>

                        {
                            obj?.data?.data.roster1.map(player => {
                                return (
                                    <div className='playerCard' key={player.name + player.id} onClick={(e) => handleClick(e,player.credit)} >
                                        <div className='playerImage'>
                                            {
                                                player.image_url === null? 
                                                <p style={{fontSize : "62px"}}> 🙎 </p> 
                                                : 
                                                <img src={player.image_url} alt="playerPhoto" height="88px"/> 
                                            }
                                        </div>
                 
                                        <div className='playerDetails'>
                                         <div className='playerName'>
                                             <p>{player.name}</p>
                                         </div>
                 
                                         <div className='playerCredit'>
                                             <p>{player.credit} Credits</p>
                                         </div>
                                        </div>
                                    </div>
                                )  
                            })
                        }
                        
                    </div>

                    <div className='cardCollection'>

                        {
                            obj?.data?.data.roster2.map(player => {
                                return (
                                    <div className='playerCard' key={player.name + player.id} onClick={(e) => handleClick(e,player.credit)}>
                                        <div className='playerImage'>
                                            {
                                                player.image_url === null? 
                                                <p style={{fontSize : "62px"}}> 🙎 </p> 
                                                : 
                                                <img src={player.image_url} alt="playerPhoto" height="88px"/> 
                                            }
                                        </div>
                 
                                        <div className='playerDetails'>
                                         <div className='playerName'>
                                             <p>{player.name}</p>
                                         </div>
                 
                                         <div className='playerCredit'>
                                             <p>{player.credit} Credits</p>
                                         </div>
                                        </div>
                                    </div>
                                )  
                            })
                        }
                        
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
