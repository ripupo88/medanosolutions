import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import BasicTable from '../Components/table/table';
import { getPokemonInfo } from '../Helpers/getPokemonInfo';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px',
        marginBottom: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    flex: {
        display: 'flex',
    },
}));

export const PokemonPage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { pokemon } = useParams();
    const [statsList, setStatsList] = useState({
        headers: [''],
        data: [['']],
    });

    useEffect(() => {
        getPokemonInfo(pokemon).then(setStatsList);
    }, []);

    if (!statsList.img) {
        return (
            <div className={classes.container}>
                <h1>{t('Loading')}...</h1>
            </div>
        );
    }

    return (
        <>
            <div className={classes.container}>
                <div>
                    <div className={classes.flex}>
                        <h1>{pokemon}</h1>
                        <Avatar
                            alt='Pokemon'
                            src={statsList.img}
                            className={classes.large}
                        />
                    </div>
                    <BasicTable dataToTable={statsList} />
                </div>
            </div>
        </>
    );
};
