import { Dispatch, AnyAction } from "redux"
import { IServices } from "../services"
import { firestore } from "firebase"

const START = 'posts/fetch-start'
const SUCCES = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'


interface IData {
    [key: string]:{
        comment: string,
        userId: string,
        createAt: firestore.Timestamp,
    }
}

const fetchStart = () => ({
    type: START
})

const fetchSucces = (payload: IData) => ({
    payload,
    type: SUCCES,
})

const fetchError = (error: Error) => ({
    error,
    type: ERROR,
})

const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}

export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return {
                ...state,
                fetching: true,
            }
            case SUCCES:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false,
            }
            case ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false,
            }
        default:
            return state
    }
    return state
}

export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, {db}: IServices) => {
        dispatch(fetchStart())
        try{
            const snaps =  await db.collection('posts').get()
            const posts = {}
            snaps.forEach(x => {
                posts[x.id] = String(x.data())
            })
            dispatch(fetchSucces(posts))
        } catch (e) {
            dispatch(fetchError(e))
        }
    }