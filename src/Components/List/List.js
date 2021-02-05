import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SelectList({ list }) {
    const classes = useStyles();
    let history = useHistory();

    const handleListItemClick = (name) => {
        history.push('pokemon/' + name);
    };

    return (
        <div className={classes.root}>
            <List component='nav'>
                {list.map((item) => {
                    const { name, url } = item;
                    return (
                        <ListItem
                            key={url}
                            button
                            onClick={() => handleListItemClick(name)}
                        >
                            <ListItemText primary={name} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}
