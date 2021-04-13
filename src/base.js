import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiLa0-eN3-x4JdRJCQLq1zdwIEEnxGddY",
    authDomain: "chatbox-app-5e4ad.firebaseapp.com",
    databaseURL: "https://chatbox-app-5e4ad-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}
export default base