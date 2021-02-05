import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
});

let defaultData = {
    headers: ['header1', 'header2'],
    data: [
        ['data1', 'data2'],
        ['data3', 'data4'],
    ],
};

export default function BasicTable({ dataToTable = defaultData }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {dataToTable.headers.map((item) => {
                            return (
                                <TableCell>
                                    <strong>{item}</strong>
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataToTable.data.map((row) => (
                        <TableRow key={row[0]}>
                            {row.map((item) => {
                                return (
                                    <TableCell component='th' scope='row'>
                                        {item}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
