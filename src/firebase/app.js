import firebase from 'firebase';
import { FIREBASE_CONFIG } from './config';
import { IS_SERVER } from '../constants';
import * as geofirex from 'geofirex';

let app = {};

if (!IS_SERVER) {
  firebase.initializeApp(FIREBASE_CONFIG);

  const db = firebase.database();
  const storage = firebase.storage().ref();
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const geo = geofirex.init(firebase);

  app = {
    db,
    storage,
    firestore,
    firebase,
    auth,
    geo,
  };
}

export default {
  db: () => {},
  storage: () => {},
  firestore: () => {},
  firebase: () => {},
  ...app,
};
