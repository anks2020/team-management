import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

import Button from '@material-ui/core/Button';
import classes from '../../assets/css/Custom.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
class EditPlayer extends Component{
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: this.props.location.state.photo,name:this.props.location.state.name}
        this.imageChangedHandler = this.imageChangedHandler.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.nameChangedHandler = this.nameChangedHandler.bind(this);
      }
    
      _handleSubmit = (e) => {
        e.preventDefault();
        this.setState({file:e.value});
        let player_list = this.props.playerlist;
        let id= this.props.location.state.id;
        player_list = player_list.filter(function(obj){return obj.ID !== id});
        let new_player = {"name":this.state.name, "photo":this.state.imagePreviewUrl,"ID":id};
        player_list.push(new_player);
        this.props.editPlayer(player_list);
        this.props.history.push('/playerlist');
      }
    
      imageChangedHandler(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
      reader.readAsDataURL(file)
    }

    nameChangedHandler =(event) =>{
            this.setState({name:event.target.value})
            event.target.value=this.setState.name
    }
    cancelledHandler = () => {
        this.props.history.push('/playerlist');
    }

    render(){
    
    let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
    return(
        <div style={{paddingTop:'30px', textAlign:"center"}}>
            <AppBar position="static"  style={{ background: '#0ac266',padding:"18px"  }}>
          <Typography variant="h4" color="inherit" className={classes.grow} width="100%" float="left">
          EDIT PLAYER
          </Typography>
      </AppBar>
      
        <div classname= "BigDiv" 
        style={{textAlign: "center",
                margin: "2px",
                padding: "3px 30px"
                }} >
            <div  className={classes.PlayerProfile}>
               <label className = {classes.Label}> Name: </label> 
                <input type="text" className = {classes.InputElement}
                    value={this.state.name}
                    onChange = {(e)=> {this.nameChangedHandler(e)}}
                />
                <label className = {classes.Label}>  Photo: </label>  
                <input  type="file"
                    className = {classes.InputElement}
                    onChange ={(e)=>this.imageChangedHandler(e)}
                 />
                <label className = {classes.Label} style={{margin: "40px -154px"}}> ID: </label> 
                <input type="text"
                    className = {classes.InputElement}
                    value={this.props.location.state.id} 
                    disabled = {true}

                />
            </div>
            <Button variant="contained" color="primary" style={{margin:"20px"}}
            onClick={(e)=>this._handleSubmit(e)}>
                Save
            </Button>
            <Button variant="contained" color="primary" style={{margin:"20px"}}
             onClick={()=> alert('Do you really want to cancel?')}
             >Cancel
            </Button>
        </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        playerlist:state.players,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        editPlayer : (players) => dispatch(actions.editPlayer(players)), 
       
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditPlayer));
