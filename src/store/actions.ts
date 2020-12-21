import {actionTypes,ActionTypes} from "./types"

export const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})

export const createGame = (gameName: string, playersAmount: number): ActionTypes => ({
    type: actionTypes.CREATE_GAME,
    payload: {
        gameName,
        playersAmount
    }
})

export const fetchGamesList = (): ActionTypes => ({
    type: actionTypes.FETCH_GAMES_LIST
})
