import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#400CCC',
        color: 'white',
        textAlign: 'center',
    },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            Copyright {new Date().getFullYear()} Poke-wiki.com &copy;
        </div>
    );
};
