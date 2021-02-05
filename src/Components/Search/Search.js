import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
import { appContext } from '../../Core/context/context';
import { searchAction } from '../../Core/actions/searchAction';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function Search() {
    const classes = useStyles();
    const { t } = useTranslation();
    const { dispatch } = useContext(appContext);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        searchAction(text).then(dispatch);
    };

    return (
        <Paper
            onSubmit={handleSubmit}
            component='form'
            className={classes.root}
        >
            <InputBase
                className={classes.input}
                placeholder={t('Search')}
                value={text}
                onChange={handleChange}
            />
            <IconButton
                type='submit'
                className={classes.iconButton}
                aria-label='search'
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
