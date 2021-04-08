import React from 'react';
import './videoCardStyles.scss';

const VideoCard = props => {


    const rawDate = new Date(props.date);
    const formatedDate = `${rawDate.getMonth() + 1}/${rawDate.getDay()}/${rawDate.getFullYear()}`;

    let title = props.title.split("");

    if (title.length > 45) {
        title = title.splice(0, 44).join("") + '...';
    } else {
        title = props.title;
    }



    return (
        <a
            href={`https://www.youtube.com/watch?v=${props.videoId}`}
            rel="noreferrer noopener"
            target="_blank"
            className="videoCard__container"
        >
            <div className="videoCard__image-container">
                <img
                    className="videoCard__image"
                    src={props.image}
                    alt="YouTube Video Thumbnail"
                />
            </div>
            <div className="videoCard__meta-container">
                <h4 className="videoCard__title">{title}</h4>

                <div className="videoCard__meta-info">
                    <div className="videoCard__play">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5ZM19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM7 12.1684V6.83169C7 6.04052 7.87526 5.56268 8.54077 5.99052L12.6915 8.65892C13.3038 9.05256 13.3038 9.94765 12.6915 10.3413L8.54075 13.0095C7.87524 13.4374 7 12.9595 7 12.1684Z" />
                        </svg>
                        <p>play</p>
                    </div>

                    <div className="videoCard__date">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12.6875C0 13.4121 0.671875 14 1.5 14H12.5C13.3281 14 14 13.4121 14 12.6875V5.25H0V12.6875ZM10 7.32812C10 7.14766 10.1687 7 10.375 7H11.625C11.8313 7 12 7.14766 12 7.32812V8.42188C12 8.60234 11.8313 8.75 11.625 8.75H10.375C10.1687 8.75 10 8.60234 10 8.42188V7.32812ZM10 10.8281C10 10.6477 10.1687 10.5 10.375 10.5H11.625C11.8313 10.5 12 10.6477 12 10.8281V11.9219C12 12.1023 11.8313 12.25 11.625 12.25H10.375C10.1687 12.25 10 12.1023 10 11.9219V10.8281ZM6 7.32812C6 7.14766 6.16875 7 6.375 7H7.625C7.83125 7 8 7.14766 8 7.32812V8.42188C8 8.60234 7.83125 8.75 7.625 8.75H6.375C6.16875 8.75 6 8.60234 6 8.42188V7.32812ZM6 10.8281C6 10.6477 6.16875 10.5 6.375 10.5H7.625C7.83125 10.5 8 10.6477 8 10.8281V11.9219C8 12.1023 7.83125 12.25 7.625 12.25H6.375C6.16875 12.25 6 12.1023 6 11.9219V10.8281ZM2 7.32812C2 7.14766 2.16875 7 2.375 7H3.625C3.83125 7 4 7.14766 4 7.32812V8.42188C4 8.60234 3.83125 8.75 3.625 8.75H2.375C2.16875 8.75 2 8.60234 2 8.42188V7.32812ZM2 10.8281C2 10.6477 2.16875 10.5 2.375 10.5H3.625C3.83125 10.5 4 10.6477 4 10.8281V11.9219C4 12.1023 3.83125 12.25 3.625 12.25H2.375C2.16875 12.25 2 12.1023 2 11.9219V10.8281ZM12.5 1.75H11V0.4375C11 0.196875 10.775 0 10.5 0H9.5C9.225 0 9 0.196875 9 0.4375V1.75H5V0.4375C5 0.196875 4.775 0 4.5 0H3.5C3.225 0 3 0.196875 3 0.4375V1.75H1.5C0.671875 1.75 0 2.33789 0 3.0625V4.375H14V3.0625C14 2.33789 13.3281 1.75 12.5 1.75Z" fill="#824C33"/>
                        </svg>

                        <p>{formatedDate}</p>
                    </div>
                </div>
            </div>

        </a>
    );


};

export default VideoCard;
