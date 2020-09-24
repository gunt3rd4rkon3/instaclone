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
    async (dispatch: Dispatch, getState: () => any, {db, storage}: IServices) => {
        dispatch(fetchStart())
        try{
            const snaps =  await db.collection('posts').get()
            const posts:any = {}
            snaps.forEach(x => {
                const key = x.id
                posts[key] = x.data()
            })
            const imgIds = await Promise.all(Object.keys(posts)
                .map(async x => {
                    const ref = storage.ref(`post/${x}.jpg`)
                    const url = await ref.getDownloadURL()
                    return [x, url]
                })
            )
            const keyedImages:any = {}
            imgIds.forEach(x => keyedImages[x[0]] = x[1])
            Object.keys(posts).forEach(x => posts[x] = {
                ...posts[x],
                imageURL: keyedImages[x],
            })
            dispatch(fetchSucces(posts))
        } catch (e) {
            console.log(e)
            dispatch(fetchError(e))
        }
    }

export const like = (id: String) => 
    async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
        console.log(id)

    }
export const share = (id: String) => 
    async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
        console.log(id)
    }