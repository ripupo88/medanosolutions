import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    par: {
        margin: 'auto',
        maxWidth: '800px',
        justifyContent: 'center',
    },
}));

export const AboutPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.container}>
                <h1>{t('About')}</h1>
            </div>
            <p className={classes.par}>{t('AboutText')}</p>
        </>
    );
};
