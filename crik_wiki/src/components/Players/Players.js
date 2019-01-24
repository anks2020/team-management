import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  row: {

    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes } = props;
  console.log(props);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell colSpan = {4} style={{backgroundColor:"MediumSeaGreen", textAlign:"center"}}><h1>PLAYER LIST</h1></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row,index) => (
            props.isEditable?
            <TableRow className={classes.row} key={index}>
            <CustomTableCell align="left"><img src={row.photo} alt={row.name} style={{height:"100px", width:"100px"}}/></CustomTableCell>
            <CustomTableCell align="center" style={{fontStyle:"bold"}}>{row.name}</CustomTableCell>
            <CustomTableCell align="left">{row.ID}</CustomTableCell>
            <CustomTableCell align="right"><Edit /></CustomTableCell>
            <CustomTableCell align="left" ><Delete/></CustomTableCell>
          </TableRow>:
            <TableRow className={classes.row} key={index}>
              <CustomTableCell align="left"><img src={row.photo} alt={row.name} style={{height:"100px", width:"100px"}}/></CustomTableCell>
              <CustomTableCell align="center" style={{fontStyle:"bold"}}>{row.name}</CustomTableCell>
              <CustomTableCell align="right">{row.ID}</CustomTableCell>
            </TableRow>
          )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);