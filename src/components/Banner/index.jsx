import React from 'react'

import './index.scss'
const BANNER_IMAGE = require('./../../assets/images/banner.jpg');

function index() {
    return (
        <div className="banner-container">
            <img src={BANNER_IMAGE} alt="ipl-banner"/>
        </div>
    )
}

export default index
