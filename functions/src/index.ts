import * as functions from 'firebase-functions';
import createServer from './createServer'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const api = functions.https.onRequest(createServer());