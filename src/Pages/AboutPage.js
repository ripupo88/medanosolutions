import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../Components/Search/Search';
import { makeStyles } from '@material-ui/core/styles';
import SelectList from '../Components/List/List';
import { appContext } from '../Core/context/context';

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
    const { state, dispatch } = useContext(appContext);

    return (
        <>
            <div className={classes.container}>
                <h1>{t('About')}</h1>
            </div>
            <p className={classes.par}>{t('AboutText')}</p>
        </>
    );
};
