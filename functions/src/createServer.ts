import  * as  express from 'express'
import * as admin from  'firebase-admin'

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
})

const db = admin.firestore()
const auth = admin.auth()
export default () => {
    const app = express()
    app.use(async (req, res, next) => {
        const token:any = req.headers.authorization
        try {
        const {uid, email} = await auth.verifyIdToken(token)
        const snap = await db.collection('users').doc(uid).get()
        const user = snap.data()
        Object.assign(req, {
            ...user,
            uid,
            email,
        })
        next()
    } catch(e) {
        res.status(400).send('Error al actualizar')
    }
    })

    app.get('/posts', (req, res) => {
        res.send('Holaaaaa wey')
    })
    return app
}