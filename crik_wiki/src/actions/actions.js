import {
    ADD_PLAYER,
    DELETE_PLAYER,
    EDIT_PLAYER,
    // RESUME,
    // CHECKED_ALL_PAX,
    // CHECKED_PAX_AI,
   
} from './types';

export const addPlayer = (players) => {
    console.log("ADDPlayer Action",players);
    return{
        type:ADD_PLAYER,
        players:players
        // player:newplayer
    
    }
};

export const editPlayer = (players) => {

    return{
        type:EDIT_PLAYER,
        players:players
    }
};

export const deletePlayer = (players) => {

    return{
        type:DELETE_PLAYER,
        players:players
    }
};