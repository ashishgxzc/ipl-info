import { v1 } from 'uuid';
const DAVID_WARNER = require('../../../assets/images/david-warner.png');
const IMRAN_TAHIR = require('../../../assets/images/imran-tahir.png');
const JONNY_BAIRSTOW = require('../../../assets/images/jonny-bairstow.png');
const ALZARRI_JOSEPH = require('../../../assets/images/alzarri-joseph.png');
const ANDRE_RUSSELL = require('../../../assets/images/andre-russell.png');

const LEADERS = [{
    id: v1(),
    name: 'David Warner',
    image: DAVID_WARNER,
    cap: 'Orange Cap',
    score: '692',
    scoreType: 'RUNS',
    capClass: 'orange-cap',
    bgClass: 'orange-bg',
    teamClass: 'SRH',
},
{
    id: v1(),
    name: 'Imran Tahir',
    image: IMRAN_TAHIR,
    cap: 'Purple Cap',
    score: '26',
    scoreType: 'WICKETS',
    capClass: 'purple-cap',
    bgClass: 'purple-bg',
    teamClass: 'CSK',
},
{
    id: v1(),
    name: 'Jonny Bairstow',
    image: JONNY_BAIRSTOW,
    cap: 'Highest score',
    score: '114',
    scoreType: 'SCORE',
    capClass: 'highest-score',
    bgClass: 'highest-score-bg',
    teamClass: 'SRH',
},
{
    id: v1(),
    name: 'Alzarri Joseph',
    image: ALZARRI_JOSEPH,
    cap: 'Best Bowling Figures',
    score: '6/12',
    scoreType: '',
    capClass: 'best-bowling',
    bgClass: 'best-bowling-bg',
    teamClass: 'MI',
},
{
    id: v1(),
    name: 'Andre Russell',
    image: ANDRE_RUSSELL,
    cap: 'Most Valuable Player',
    score: '369',
    scoreType: 'PTS',
    capClass: 'most-valuable-player',
    bgClass: 'most-valuable-player-bg',
    teamClass: 'KKR',
},
]

export {
    LEADERS,
}