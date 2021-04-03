import React, {useState} from 'react';
import './smIconStyles.scss';
import facebookDark from '../../../assets/social-icons/facebook-dark.svg';
import facebookLight from '../../../assets/social-icons/facebook-light.svg';
import youtubeDark from '../../../assets/social-icons/youtube-dark.svg';
import youtubeLight from '../../../assets/social-icons/youtube-light.svg';
import ticktockDark from '../../../assets/social-icons/ticktock-dark.svg';
import ticktockLight from '../../../assets/social-icons/ticktock-light.svg';
import instagramDark from '../../../assets/social-icons/instagram-dark.svg';
import instagramLight from '../../../assets/social-icons/instagram-light.svg';
import snapchatDark from '../../../assets/social-icons/snapchat-dark.svg';
import snapchatLight from '../../../assets/social-icons/snapchat-light.svg';
import twitterDark from '../../../assets/social-icons/twitter-dark.svg';
import twitterLight from '../../../assets/social-icons/twitter-light.svg';

const SocialMediaIcon = props => {

    const [iconHover, setIconHover] = useState();


    let socialMediaData = {
        facebook: {
            theme: {
                dark: facebookDark,
                light: facebookLight
            },
            url: "https://www.facebook.com/"
        },
        youtube: {
            theme: {
                dark: youtubeDark,
                light: youtubeLight
            },
            url: "https://www.youtube.com/"

        },
        ticktock: {
            theme: {
                dark: ticktockDark,
                light: ticktockLight
            },
            url: "https://apps.apple.com/ro/app/tiktok/id835599320"
        },
        instagram: {
            theme: {
                dark: instagramDark,
                light: instagramLight
            },
            url: "https://www.instagram.com/"
        },
        snapchat: {
            theme: {
                dark: snapchatDark,
                light: snapchatLight
            },
            url: "https://www.snapchat.com/"
        },
        twitter: {
            theme: {
                dark: twitterDark,
                light: twitterLight
            },
            url: "https://twitter.com/home"
        },
};

    //Holds social media account link
    let socialUrl = socialMediaData[props.type].url;

    //Holds the icon src
    let iconType = socialMediaData[props.type].theme[props.theme];

    //Holds the icon src for the hover state
    let iconTypeActive = socialMediaData[props.type].theme[props.theme === 'dark' ? "light" : "dark"];


    //Determines the correct icon style
    let linkStyle = ["social-link"];

    if (props.disable) {
        linkStyle.push('social-link--disabled');
    } else if (props.location === 'sidebar') {
        linkStyle.push('social-link--sidebar');
    } else if (props.location === 'mobile-hero') {
        linkStyle.push('social-link--mobile-hero');
    } else if (props.location === 'mobile-nav') {
        linkStyle.push('social-link--mobile-nav');
    } else if (props.location === 'contact') {
        linkStyle.push('social-link--contact');
    }

    return (
        <a
            className={linkStyle.join(' ')}
            href={socialUrl}
            aria-disabled={props.disable}
            rel="noreferrer noopener"
            target="_blank"
            onMouseEnter={() => setIconHover(true)}
            onMouseLeave={() => setIconHover(false)}
        >
            <img src={iconHover ? iconTypeActive : iconType} alt={` ${props.type} icon`}/>
            {props.location === 'contact' ? <p>{props.type}</p> : null}
        </a>




    );
}

export default React.memo(SocialMediaIcon);
