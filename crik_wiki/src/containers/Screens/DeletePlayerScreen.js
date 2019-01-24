import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

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
import Button from '@material-ui/core/Button';
import MyDialog from '../../components/Dialogs/Dialog';

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

class PlayerTable extends Component {
  constructor(props)
  {
      super(props)
      this.state={
        showDialog : false,
        toBeDeleted : null
      }
      this.onClickofDelete = this.onClickofDelete.bind(this);
      this.onSaveHandler = this.onSaveHandler.bind(this);
  }

  onClickofDelete = (id) =>{
    this.setState({showDialog:false});
    let player_list = [...this.props.playerlist]
    player_list = player_list.filter(function(obj){return obj.ID !== id});
    this.props.deletePlayer(player_list);
  }
  onSaveHandler = (e) =>{
    this.props.history.push('/playerlist');
  }

render(){
  return (
      <div style={{textAlign:"center", paddingTop: "30px"}}>
    <Paper className={styles.root}>
    <MyDialog showDialog={this.state.showDialog}  onYes = {this.onClickofDelete} onNo = {()=>{this.setState({showDialog:true})}} />
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell colSpan={6} style={{backgroundColor:"MediumSeaGreen", textAlign:"center"}}><h1>PLAYER LIST</h1></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.playerlist.map((row,index) => (
            <TableRow className={styles.row} key={index}>
            <CustomTableCell align="left"><img src={row.photo} alt={row.name} style={{height:"100px", width:"100px"}}/></CustomTableCell>
            <CustomTableCell align="center" style={{fontStyle:"bold"}}>{row.name}</CustomTableCell>
            <CustomTableCell align="left">{row.ID}</CustomTableCell>
            <CustomTableCell align="left" >
            <Edit onClick={()=>this.props.history.push({pathname: '/editPlayer',
              state: { "name":row.name, "id": row.ID, "photo": row.photo }})} />   
            </CustomTableCell>
            <CustomTableCell align="left" ><Delete onClick={() => { this.setState({showDialog:true, toBeDeleted:row.ID}); console.log("tttttt", this.state.showDialog); this.onClickofDelete(row.ID) }} /></CustomTableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" style={{textAlign:"center",margin:"20px"}}
            onClick={(e)=>this.onSaveHandler(e)}>
                Save
            </Button>
    </Paper>
    </div>
  );
}

}
PlayerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
  return {
      playerlist:state.players,
  };
}
const mapDispatchToProps = dispatch => {
  return {
      deletePlayer : (players) => dispatch(actions.deletePlayer(players)), 
     
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(withRouter(PlayerTable)));
