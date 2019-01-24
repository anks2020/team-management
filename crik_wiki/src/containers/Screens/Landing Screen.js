import React from 'react';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomTableCell from '../../components/Players/Players';
import classes from '../../assets/css/Custom.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const LandingScreen = (props) =>{
 console.log(props);
        return (
            <div>
                <CustomTableCell list={props.playerlist} />
                <Fab  color="primary" aria-label="Add" className={classes.addPlayerButton}
                onClick={() => props.history.push('/addPlayer')}
                >
                 <AddIcon />
                </Fab>
                <Fab  color="primary" aria-label="Add" className={classes.SwipeLeftButton}
                onClick={() => props.history.push('/edit-delete')}
                >
                 <KeyboardBackspace />
                </Fab>
            </div>
        )

}

const mapStateToProps = state => {
    return {
        playerlist:state.players,
    };
}
export default connect(mapStateToProps)(withRouter(LandingScreen));
