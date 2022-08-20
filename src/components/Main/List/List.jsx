import React, { useContext }from 'react';

import { List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide } from '@material-ui/core';

import { Delete,MoneyOff,AttachMoney } from '@material-ui/icons';
 
import useStyles from './styles';

import { ExpenseTrackerContext } from '../../../Context/context';

const List = () => {

    const classes = useStyles();

    const {deleteTransaction,transactions} = useContext(ExpenseTrackerContext);



    return (
        <MUIList dense={false} className={classes.list}>

            {transactions.map((transaction) => (
                
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                {transaction.type==="Income"? <AttachMoney/> : <MoneyOff/>}
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={transaction.category} secondary = {`\u20B9${transaction.amount} on ${transaction.date} `} >
                            
                        </ListItemText>

                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                
                    </ListItem>
                </Slide>


            ))}
            
        </MUIList>

    )
}

 
export default List
