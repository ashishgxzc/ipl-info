import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Loader from './../../Loader';
import { LEADERS } from './data';
import * as d3 from 'd3';
import seasonCSV from './../../../assets/ipl-data/season.csv';
import playerCSV from './../../../assets/ipl-data/player.csv';
import './index.scss';

const PLAYER_PLACEHOLDER = require('../../../assets/images/player-placeholder.png');

function Highlights() {
    const [seasonData, setSeasonData] = useState([]);
    const [playerIdNameMap, setPlayerIdNameMap] = useState([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const seasonArr = [];
            const playerIdNameMapObj = {};
            await d3.csv(seasonCSV, (data) => seasonArr.push(data));
            await d3.csv(playerCSV, (data) => playerIdNameMapObj[data.Player_Id] = data.Player_Name);
            // console.log(seasonArr);
            // console.log(playerIdNameMapObj);

            seasonArr.reverse();
            setSeasonData(seasonArr);
            setPlayerIdNameMap(playerIdNameMapObj);
            setLoading(false);
        }
        getData()
    }, [])
    return (
        <>
            <div className="highlights">
                <Fade up>
                    <h3 className="headline">2019 in Leaders</h3>
                    <ul className="cards-container">
                        {
                            LEADERS.map((leader) => (
                                <li className="card">
                                    <div className={`image-container ${leader.bgClass}`}>
                                        <span className={`team-logo ${leader.teamClass}`} />
                                        <img className="player-image" src={leader.image} title={leader.name} alt={leader.name} />
                                        <p className={`player-cap ${leader.capClass}`}>{leader.cap}</p>
                                    </div>
                                    <div className="player-info">
                                        <p className="player-firstname">{leader.name.split(' ')[0]}</p>
                                        <p className="player-lastname">{leader.name.split(' ')[1]}</p>
                                        <p className="player-score">{leader.score}</p>
                                        <p className="player-score-type">{leader.scoreType}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Fade>
            </div>
            {
                loading ? <Loader />
                    :
                    seasonData.map((season) => (
                        <div className="highlights">
                            <Fade up>
                                <h3 className="headline">{season.Season_Year} in Leaders</h3>
                                <ul className="cards-container">
                                    <li className="card">
                                        <div className={`image-container ${season.bgClass}`}>
                                            <span className={`team-logo ${season.teamClass}`} />
                                            <img className="player-image" src={PLAYER_PLACEHOLDER} title={season.name} alt={season.name} />
                                            <p className={`player-cap orange-cap`}>Orange Cap</p>
                                        </div>
                                        <div className="player-info">
                                            <p className="player-firstname">{playerIdNameMap[season.Orange_Cap_Id].split(' ')[0]}</p>
                                            <p className="player-lastname">{playerIdNameMap[season.Orange_Cap_Id].split(' ')[1]}</p>
                                            <p className="player-score">{season.score}</p>
                                            <p className="player-score-type">RUNS</p>
                                        </div>
                                    </li>
                                    <li className="card">
                                        <div className={`image-container ${season.bgClass}`}>
                                            <span className={`team-logo ${season.teamClass}`} />
                                            <img className="player-image" src={PLAYER_PLACEHOLDER} title={season.name} alt={season.name} />
                                            <p className={`player-cap purple-cap`}>Purple Cap</p>
                                        </div>
                                        <div className="player-info">
                                            <p className="player-firstname">{playerIdNameMap[season.Purple_Cap_Id].split(' ')[0]}</p>
                                            <p className="player-lastname">{playerIdNameMap[season.Purple_Cap_Id].split(' ')[1]}</p>
                                            <p className="player-score">{season.score}</p>
                                            <p className="player-score-type">WICKETS</p>
                                        </div>
                                    </li>

                                    <li className="card">
                                        <div className={`image-container ${season.bgClass}`}>
                                            <span className={`team-logo ${season.teamClass}`} />
                                            <img className="player-image" src={PLAYER_PLACEHOLDER} title={season.name} alt={season.name} />
                                            <p className={`player-cap highest-score`}>HIGHEST SCORE</p>
                                        </div>
                                        <div className="player-info">
                                            <p className="player-firstname">{playerIdNameMap[season.Man_of_the_Series_Id].split(' ')[0]}</p>
                                            <p className="player-lastname">{playerIdNameMap[season.Man_of_the_Series_Id].split(' ')[1]}</p>
                                            <p className="player-score">{season.score}</p>
                                            <p className="player-score-type">Highest Score</p>
                                        </div>
                                    </li>

                                </ul>
                            </Fade>
                        </div>
                    ))
            }
        </>
    )
}

export default Highlights;
