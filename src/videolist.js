import React from 'react'
import Videolistitem from './videolistitem'


const Videolist = (props) => {

    const videoitems = props.videos.map ((video) => {
        return <Videolistitem
                OnselectedVideo = {props.videoclick}
        key = {video.etag} video = {video} 
         />
    })
    return ( <ul className  = "col-md-4 list-group">
            {videoitems}
            </ul>
    );

};

export default Videolist;

