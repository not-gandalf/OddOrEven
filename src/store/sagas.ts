import {takeLatest} from "redux-saga/effects"
import { CreateGameAction,actionTypes } from "./types"
import api from "../api"

function *sagas() {
    yield takeLatest(actionTypes.CREATE_GAME,createGame)
    yield takeLatest(actionTypes.FETCH_GAMES_LIST,fetchGamesList)
}

function *createGame(action:CreateGameAction) {
    try {
        yield api.createGame(action.payload)
    } catch (e) {
        yield console.log(e)
    }
}

function *fetchGamesList() {
    try {
        yield api.fetchGamesList()
    } catch (e) {
        yield console.log(e)
    }
}

export default sagas