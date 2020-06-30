import React from 'react'
import SocialLinks from './SocialLinks';
import TeamsLinks from './TeamLinks';

import './index.scss';

function index() {
    return (
        <div className="footer-container">
            <SocialLinks />
            <TeamsLinks />
        </div>
    )
}

export default index
