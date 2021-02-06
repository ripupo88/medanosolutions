import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
    },
    container: {
        marginTop: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}));

export const LanguagePage = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <div className={classes.container}>
                <h1>{t('SelectLang')}</h1>
            </div>
            <div className={classes.container}>
                <button
                    onClick={() => handleClick('en')}
                    style={{ padding: 10 }}
                >
                    <img
                        className={classes.img}
                        src='./assets/img/english.jpg'
                        alt='England flag'
                    />
                </button>
                <button
                    onClick={() => handleClick('es')}
                    style={{ padding: 10 }}
                >
                    <img
                        className={classes.img}
                        src='./assets/img/spanish.jpg'
                        alt='spain flag'
                    />
                </button>
            </div>
        </>
    );
};
