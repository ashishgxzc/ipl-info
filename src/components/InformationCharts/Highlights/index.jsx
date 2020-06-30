import React from 'react'
import Fade from 'react-reveal/Fade';

import { LEADERS } from './data';

import './index.scss';

function index() {
    return (
        <div className="highlights">
            <h3 className="headline">2019 in Leaders</h3>
            <Fade up>
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
    )
}

export default index;
