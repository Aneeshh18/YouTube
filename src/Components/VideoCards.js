import React from 'react'
const VideoCards = ({ info }) => {
    const { id, snippet: { channelTitle, title, publishedAt, thumbnails }, statistics, contentDetails } = info;
    return (
        <div className="video p-4 ml-4 cursor-pointer ">
            <div className="video__thumbnail">
                <img 
                className='rounded-xl w-full'
                src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className='video detail'>
            <div className="video-title font-semibold text-base leading-snug ">
              {title.length > 60 ? title.slice(0, 60) + "..." : title}
            </div>
                <div className='text-sm pt-2'>{channelTitle}</div>
                <div className="text-xs pt-1">
              <span>
                {Intl.NumberFormat("en", { notation: "compact" }).format(statistics.viewCount)}{" "}
                views
              </span>
              <span> • </span>

            </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default VideoCards;