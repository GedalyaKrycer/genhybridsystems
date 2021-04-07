import React, {useEffect, useState} from 'react';
import './videosContainerStyles.scss';
import axios from "axios";

const VideosContainer = props => {
    const [videoData, setVideoData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgCCKnZxJXawA8kw1rBqfq1B6vNZvU7fB&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
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
            console.log(video.snippet);

             return (
                 <>
                    <p>{video.snippet.title}</p>
                    <p>{video.snippet.publishedAt}</p>
                    <p>{video.snippet.resourceId.videoId}</p>
                    <p>{video.snippet.thumbnails.standard.height}</p>
                    <img src={video.snippet.thumbnails.standard.url} styles={{
                        height: video.snippet.thumbnails.standard.height,
                        width: 'auto'
                    }} />
                 </>
            )
        })
    }


    return(
        <div className="">
            {videoContent}

        </div>
    );


};

export default VideosContainer;
