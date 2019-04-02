import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import LandingScreen from '../containers/Screens/Landing Screen';
import DeleteScreen from '../containers/Screens/DeletePlayerScreen';
import Fab from '@material-ui/core/Fab';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import classes from '../assets/css/Custom.css';
const Carousel = () => {
  let reactSwipeEl;
  let show=true;
  return (
    // <div>
    //   <button onClick={() => {reactSwipeEl.next(); show= true }}>Next</button>
    //   <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    //   <ReactSwipe
    //     className="carousel"
    //     swipeOptions={{ continuous:false }}
    //     ref={el => (reactSwipeEl = el)}
    //     onSwipe = {() => reactSwipeEl.next()}
    //     style ={{height:"300px"}}
    //   >
    //    <LandingScreen />
    //    <DeleteScreen />
      // {/* <div> <LandingScreen /></div>
      // <div>{show? <DeleteScreen /> : null}</div> */}
      // // </ReactSwipe>
      // {/* <button onClick={() => {reactSwipeEl.next(); show=true}}>Next</button>
      // <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
      
    // </div>
    <div>
      <Fab  color="primary" aria-label="Add" className={classes.SwipeLeftButton}
          // onClick={() =>{reactSwipeEl.next(); show=false}} 
      //  onClick={() => props.history.push('/edit-delete')} 
           >
          <KeyboardBackspace />
               </Fab>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous:true }}
        ref={el => (reactSwipeEl = el)}
        onSwipe = {() => reactSwipeEl.prev()}
        infinite = {false}
        style ={{height:"300px"}}
      >
     <LandingScreen />
       <DeleteScreen  /> 
      </ReactSwipe>
      {/* <button onClick={() => {reactSwipeEl.next(); show=true}}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
      
    </div>
  );
};
 
export default(Carousel);
