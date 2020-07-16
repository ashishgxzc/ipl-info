import React, { useEffect, useState } from 'react'
import * as d3 from 'd3';
import matchCSV from './../../../assets/ipl-data/match.csv';
import seasonCSV from './../../../assets/ipl-data/season.csv';
import teamCSV from './../../../assets/ipl-data/team.csv';
import './index.scss';
import { config } from './highChart'
const ReactHighcharts = require('react-highcharts');


function SeasonWinner() {
    const [state, setState] = useState({
        seasonConfigArr: [],
    })
    useEffect(() => {
        const getData = async () => {
            let seasonMap = {};
            let teamScoreBySeason = {};
            let teamMap = {};
            // mapping of season id to season year
            await d3.csv(seasonCSV, (data) => {
                seasonMap[data.Season_Id] = data.Season_Year;
            });

            await d3.csv(teamCSV, (data) => {
                teamMap[data.Team_Id] = data.Team_Short_Code;
            });

            // calculating matches won by each team in each IPL season
            await d3.csv(matchCSV, (data) => {
                if (data.Match_Winner_Id) {
                    // If match was draw don't consider
                    teamScoreBySeason = {
                        ...teamScoreBySeason,
                        [data.Season_Id]: {
                            ...(teamScoreBySeason?.[data.Season_Id] || {}),
                            [data.Match_Winner_Id]: (teamScoreBySeason?.[data.Season_Id]?.[data.Match_Winner_Id] || 0) + 1,
                        }
                    }
                }
            });
            // console.log(teamMap);
            // console.log(seasonMap);
            // console.log(teamScoreBySeason);
            const seasonConfigArr = await (Object.keys(teamScoreBySeason)).map((season) => {
                return {
                    ...config,
                    title: {
                        text: `${config.title.text} ${seasonMap[season]}`,
                    },
                    series: [{
                        ...config.series,
                        data: Object.keys(teamScoreBySeason[season]).map((teamId) => {
                            return {
                                name: teamMap[teamId.toString()],
                                y: teamScoreBySeason[season][teamId.toString()]
                            }
                        })
                    }]
                }
            });
            console.log('data', seasonConfigArr);
            setState((prevState) => ({
                ...prevState,
                seasonConfigArr,
            }));
        }
        getData();
    }, [])


    const { seasonConfigArr } = state;
    return (seasonConfigArr.map((seasonConfig, index) => (
        <div className="chart-container" key={`season-${index}`}>
            <ReactHighcharts config={seasonConfig}></ReactHighcharts>
        </div>
    ))
    )
}



export default SeasonWinner;

