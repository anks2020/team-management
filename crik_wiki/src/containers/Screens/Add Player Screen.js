import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import classes from '../../assets/css/Custom.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class AddPlayer extends Component{
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: null,name:null, id:null }
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.onCancelHandler = this. onCancelHandler.bind(this);
      }

      onCancelHandler = (e) =>{
        this.props.history.push('/playerlist');
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
        this.setState({file:e.value});
        console.log("state",this.state)
        this.addPlayer(this.state.name,this.state.imagePreviewUrl,this.state.id)
      }
    
      _handleImageChange(e) {
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
    addPlayer = (name,photo,id) =>{
        if(name == null || id == null || photo ==null)  
        {
          alert("Please fill in all the details!")
          return;
        }
        let player_list = [...this.props.playerlist]
        console.log("playerlist",player_list);
        console.log(name,photo,id);
        let new_player = {"name":name, "photo":photo,"ID":id};
        player_list.push(new_player);
        console.log("The new PLAYER_LIST",player_list);
        this.props.addPlayer(player_list);
        console.log("PLAYERS FROM ADDPLAYER AFTER ADDING",this.props.playerlist);
        this.props.history.push('/playerlist');
    }
    nameChangedHandler =(event) =>{
            this.setState({name:event.target.value})
    }
    idChangedHandler =(event) =>{
        this.setState({id:event.target.value})
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
          ADD PLAYER
          </Typography>
        </AppBar>
        <div classname= "BigDiv" 
        style={{textAlign: "center",
                margin: "2px",
                padding: "3px 30px",
                flexGrow: 1,
                boxSizing: "borderBox"
                }} >
            
            <div  className={classes.PlayerProfile}>
               <label className = {classes.Label}> Name: </label> 
                <input type="text" className = {classes.InputElement} value={this.state.name} 
                    placeholder="Enter Player Name"
                    onChange = {(e)=> {this.nameChangedHandler(e)}}
                />
                <label className = {classes.Label}>  Photo: </label>  
                <input  type="file"
                    className = {classes.InputElement}
                    onChange ={(e)=>this._handleImageChange(e)}
                 />
                <label className = {classes.Label} style={{margin: "40px -154px"}}> ID: </label> 
                <input type="text"
                    className = {classes.InputElement}
                    placeholder="Enter Player Id"
                    value={this.state.id} 
                    onChange = {(e)=>this.idChangedHandler(e)} 
                />
            </div>
            <Button variant="contained" color="primary" style={{margin:"20px"}}
            onClick={(e)=>this._handleSubmit(e)}>
                Save
            </Button>
            <Button variant="contained" color="primary" style={{margin:"20px"}}
             onClick={()=> this.onCancelHandler()}
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
        addPlayer : (players) => dispatch(actions.addPlayer(players)), 
       
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddPlayer));