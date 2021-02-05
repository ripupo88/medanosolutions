import React, { useContext } from 'react';
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
    imgContainer: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        width: '200px',
    },
}));

export const HomePage = () => {
    const classes = useStyles();
    // const { t, i18n } = useTranslation();
    const { state } = useContext(appContext);
    const { results: list } = state;

    return (
        <>
            <div className={classes.container}>
                <div>
                    <Search />
                    <SelectList list={list} />
                </div>
            </div>
        </>
    );
};
