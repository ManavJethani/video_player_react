import React from 'react'

const VideoDetail = ({video}) => {

    if (!video)
    {
        return <div>Loading......</div>;
    }

    const videoId = video.id.videoId;

    const Urlname = 'https://www.youtube.com/embed/' + videoId;
    return (    
        <div>
            <div className="ui embed" style={{marginRight:10,marginLeft:10,paddingBottom:500}}>
                <iframe src={Urlname} title="video selected"></iframe>
            </div>
            <div style={{paddingTop:10}}>
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>        
            </div>
        </div>

    )
}

export default VideoDetail;