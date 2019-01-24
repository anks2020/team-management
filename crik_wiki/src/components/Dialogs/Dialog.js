import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            open: true,
          };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleYes = this.handleYes.bind(this);
    }
  
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):

      console.log("THISSSSSSS",this.props.showDialog);
      console.log("PPPPPPPP",prevProps.showDialog);
      if (this.props.showDialog !== prevProps.showDialog) {
        this.setState({open:this.props.showDialog});
      }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.onNo();
    };
   
    handleYes = () =>{
        this.setState({ open: false });
        this.props.onYes();
    }
    shouldComponentUpdate=(nextProps,nextState)=>
    { console.log("nextprops",nextProps,"nextstate",nextState);
    
    return true;
    }
 componentWillUpdate=(nextProps,nextstate)=>{
    
    console.log("thisprops",this.props,"nextprops",nextProps);
    this.props=nextProps;
    console.log("changed!!, now thisprops:",this.props);

 }
  render() {
      console.log("showDialog",this.props.showDialog);
      console.log("DDDDDDDDDDDDDDDDDD",this.state.open);

    return (
      <div>
          {this.props.showDialog?
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to delete the player?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleYes} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        : null} 
      </div>
    );
  }
}

export default AlertDialog;