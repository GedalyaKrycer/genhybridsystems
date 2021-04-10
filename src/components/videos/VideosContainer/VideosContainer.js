import React, {useEffect, useState} from 'react';
import './videosContainerStyles.scss';
import axios from "axios";
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import youTubeIcon from "../../../assets/social-icons/youtube-dark.svg";
import VideoCard from "../VideoCard/VideoCard";

const VideosContainer = props => {
    const [videoData, setVideoData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgCCKnZxJXawA8kw1rBqfq1B6vNZvU7fB&maxResults=6&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
            .then(res => {
                setLoading(true);
                setVideoData(res.data.items);
            })
            .then(res => {
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])


    let videoContent;

    if(loading) {
        videoContent = <p>Loading...</p>
    } else if (!loading) {
        videoContent = videoData.map(video => {

            const validatedVideo = video.snippet.thumbnails.standard.url ? video.snippet.thumbnails.standard.url : null;

             return (
                 <VideoCard
                     key={video.snippet.resourceId.videoId}
                     videoId={video.snippet.resourceId.videoId}
                     date={video.snippet.publishedAt}
                     title={video.snippet.title}
                     image={validatedVideo}
                 />
            )
        })
    }


    return (
        <SectionLayout customClass="video__section-container" id="videos">
            <div className="video__content-layout">
                <div className="video__content">
                    <h2 className="video__title">Follow our <span className="g__text-emphasis">progress</span> on YouTube</h2>
                    <p>Check back here for the latest videos or watch all of them on our channel.</p>
                    <a
                        href="https://www.youtube.com/channel/UCd_vGMt4KBH97jnskSVXBwA"
                        className="primaryBtn primaryBtn--normal primaryBtn--grid video__cta"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <img src={youTubeIcon} alt="YouTube Icon" />
                        Our channel
                    </a>
                </div>
                <div className="video__card-container">
                    {videoContent}
                </div>
            </div>
        </SectionLayout>
    );


};

export default VideosContainer;
