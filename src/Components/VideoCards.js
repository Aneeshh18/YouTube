import React from 'react'

const VideoCards = ({ info }) => {
    const { id, snippet: { channelTitle, title, thumbnails }, statistics, contentDetails } = info;
    return (
        <div className="video w-full cursor-pointer h-fit">
            <div className="video__thumbnail  relative">
                <img 
                className='rounded-xl'
                src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div>
            </div>
        </div>
    )
}

export default VideoCards;