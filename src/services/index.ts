import * as firebase from './firebase'
import {firestore, storage, auth} from 'firebase'
const services = {
    ...firebase,
}
export interface IServices {
    db: firestore.Firestore
    storage: storage.Storage
    auth: auth.Auth
}
export default services