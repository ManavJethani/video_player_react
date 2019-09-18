import React from 'react'

const videoslistitem = (props) => {

    const video = props.video;
    
    const OnselectedVideo = props.OnselectedVideo;
   
    const URL = video.snippet.thumbnails.default.url;
    return (
        <li onClick = {() => OnselectedVideo(video)} className = "list-group-item">
                <div className = "item" style={{display:'flex',alignItem:'center',cursor:'pointer'}}>
                    <img className = "ui image" src = {URL} alt = "Loading img"  style={{paddingRight:10}}/>
                
                <div className = "content">
                    <div className = "header">{video.snippet.title}</div>
                </div>
                </div>
        </li>

    
    );
}

export default videoslistitem;