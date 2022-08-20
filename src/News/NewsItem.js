import React from 'react'

import './NewsItem.css'

const NewsItem = ({title,description,url,urlToImage}) => {
    return (
        <div className="news-item">
            <img className="news-img" src={ urlToImage} alt="" />
            <h3><a target="_blank" href={url}>{title}</a></h3>
            <p>{description }</p>
        </div>
    )
}

export default NewsItem
