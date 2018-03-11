import React from 'react';

const VideoDetail = (props)=>{
    if(!props.video){
        return <div>Loading...</div>;
    }
    const item = props.video;
    const videoId = item.id.videoId;
    const url = "https://www.youtube.com/embed/"+ videoId;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><u>Title</u> : {item.snippet.title}</div>
                <div><u>Description</u> : {item.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;