import {
    ADD_PLAYER,
    DELETE_PLAYER,
    EDIT_PLAYER,
} from './types';

export const addPlayer = (players) => {
    console.log("ADDPlayer Action",players);
    return{
        type:ADD_PLAYER,
        players:players
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
