import axios from 'axios';
import NewsItem from './NewsItem';
import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import useStyles from '../styles';


const NewsList = () => {
    const [articles, setArticles] = useState([]);

  const classes = useStyles();
    

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3b5a95d7684a417382b26cb46292d797");


            setArticles(res.data.articles);

            console.log(res);
        };
        getArticles();
    },[]);

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
                {articles.map(({ title, description, url, urlToImage }) => (
                    <Grid item xs={12} sm={3}>
                <NewsItem title={title } description={description} url={url} urlToImage={urlToImage} />
                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default NewsList
