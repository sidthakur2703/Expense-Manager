import React,{useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import Form from './Form/Forms';
import List from './List/List';
import useStyles from './styles';

import { ExpenseTrackerContext } from '../../Context/context';

const Main = () => {
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Rupiya" subheader="Your finance Buddy" />
            
            <CardContent>
                
                <Typography align="center" variant="h5">Total Balance :  {'\u20B9'}{ balance}</Typography>

                <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:'25px'}}>
                    {/* {infocard} */}

                </Typography>

            <Divider />

                <Form/>
    
            </CardContent>

            <CardContent className={classes.CardContent}>
              
                <Grid container spacing={2}>

                    <Grid item xs={12}>

                        <List/>

                    </Grid>                    

                </Grid>

            </CardContent> 


        </Card>

    )
}

export default Main
