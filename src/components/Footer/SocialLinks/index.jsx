import React from 'react'
import Icon from 'react-icons-kit';
import { SOCIAL_MEDIA_LINKS} from './data';

function index() {
    return (
        <div>
            <ul>
                {
                    SOCIAL_MEDIA_LINKS.map((link) => (
                        <li>
                            <a href={link.url} title={`Follow on ${link.name}`}>
                                <Icon icon={link.icon} size={30} />
                            </a>
                        </li>
                    ))
                }
                </ul>
        </div>
    )
}

export default index;
