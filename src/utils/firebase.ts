/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { purgeStore } from 'store';
// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import {
  deleteDoc,
  doc,
  // getDoc,
  // setDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
// Required for side-effects
import 'firebase/firestore';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { SliceType } from 'models/store';

import { detectEnv } from './environment';
import { IProjectResource } from '@vision/core';
import { log } from './logger';
// import { getFirestore } from "firebase/firestore";

const env = detectEnv();

const firebaseConfig = env.firebase;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

// firebase.firestore.setLogLevel('debug');

// auth.languageCode = 'en';
auth.useDeviceLanguage();

// #region MISC
const firebaseFirestoreSymbol = '🔥⌸=>';
// #endregion

// #region AUTH
export const signingWithGoogle = async (): Promise<
  ({
    token: string | undefined,
    user: any
  })
  |
  ({
    error: any
  })
> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    return {
      token,
      user,
    };

  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error('FirebaseError', {
      credential,
      email,
      errorCode,
      errorMessage,
    });

    return {
      error
    };
  }
};

export const signInWithFaceboook = async (): Promise<
  ({
    status: number
    token: string | undefined,
    user: any,
  })
  |
  ({
    error: any,
    status: number,
  })
> => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  provider.addScope('user_age_range');
  provider.addScope('user_birthday');
  provider.addScope('user_friends');
  provider.addScope('user_gender');
  // provider.addScope('user_hometown')
  // provider.addScope('user_likes')
  provider.addScope('user_link');
  // provider.addScope('user_location')
  // provider.addScope('user_photos')
  // provider.addScope('user_posts')
  // provider.addScope('user_videos')
  // auth.languageCode = 'en'
  auth.useDeviceLanguage();
  // provider.setCustomParameters({
  //   'display': 'popup'
  // });
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result?.user;

    return {
      status: 200,
      token,
      user,
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.error('FirebaseError', {
      credential,
      email,
      errorCode,
      errorMessage,
    });

    return {
      error: {
        code: errorCode,
        credential,
        email,
        message: errorMessage,
      },
      status: 400,
    };
  }

};

// eslint-disable-next-line consistent-return
export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  provider.addScope('repo');
  provider.setCustomParameters({
    'allow_signup': 'false'
  });

  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    const user = result.user;

    return {
      token,
      user,
    };
    // IdP data available using getAdditionalUserInfo(result)
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);

    console.error('FirebaseError', {
      credential,
      email,
      errorCode,
      errorMessage,
    });
  }
};

export const logOut = async () => {
  const auth = getAuth();

  try {
    const result = await signOut(auth);

    localStorage.clear();
    setTimeout(() => {
      purgeStore();
    }, 1000);

    // var newWindow = window.open('https://mail.google.com/mail/?logout&hl=fr', 'Disconnect from Google', 'width=100,height=50,menubar=no,status=no,location=no,toolbar=no,scrollbars=no,top=200,left=200');
    // setTimeout(function () {
    //   if (newWindow) newWindow.close();
    //   window.location.assign("auth");
    // }, 3000);

    return result;
  } catch (error) {
    console.error('LogoutError:', error);
    return error;
  }
};
// #endregion

//#region FIRESTORE
export const createDocument = async (options: {
  slice: SliceType,
  data: any
  workspaceId?: string, // If you have subcollections
  projectId?: string,
  customId?: string,
}) => {
  const {
    slice,
    workspaceId,
    projectId,
    customId,
    data,
  } = options;

  let path = '';

  if (projectId) {
    path = `/${slice}/${customId || workspaceId}/${projectId}`;
  } else {
    path = `/${slice}`;
  }

  console.log(`🔥 FIREBASE: Creating ${path}`);

  try {
    if (projectId && workspaceId) {
      const docRef = await addDoc(
        collection(db, slice, customId || workspaceId, projectId),
        data
      );

      console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Created => ${path}`);
      return {
        data: {
          ...data,
          id: docRef.id,
        },
        status: 200,
      };
    } else {
      const docRef = doc(db, slice, customId || workspaceId as string);
      await setDoc(docRef, data);
      // const docRef = await addDoc(
      //   collection(db, slice),
      //   data
      // );

      console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Created => ${path}`);

      return {
        data: {
          ...data,
          id: docRef.id,
        },
        status: 200,
      };
    }
  } catch (e) {
    console.error(`${firebaseFirestoreSymbol}🟥 ERROR: Creating => ${path}`, { data, error: e });
    return {
      error: e,
      message: `Failed writing to Firebase Store in collection ${slice}`,
      status: 400,
    };
  }
};

export const readCollection = async (options: {
  slice: string, workspaceId?: string, projectId?: string, id?: string
}) => {
  const {
    slice,
    workspaceId,
    projectId,
  } = options;

  // @ts-ignore
  const result: any[] = [];
  let path;
  try {
    const querySnapshot = await getDocs(
      !!projectId && !!workspaceId
        ? collection(db, slice, workspaceId, projectId)
        : workspaceId
          ? collection(db, slice, workspaceId)
          : collection(db, slice)
    );

    path = projectId ? `=> /${workspaceId}/${projectId}\n` : '';

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        result.push({
          ref: doc.ref.id,
          ...doc.data(),
          ...(slice !== 'projects' ? ({ id: doc?.id }) : ({})),
        });
      }
    });

    console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Fetched  /%c${slice}`, 'font-weight: bold; color: cyan', path, result);
    return result;
  } catch (e) {
    console.error(`${firebaseFirestoreSymbol}🟥 ERROR: Fetching /%c${slice}`, 'font-weight: bold; color: cyan', path, e);
    return {
      error: e,
      message: `Failed writing to Firebase Store in collection ${slice}`,
      status: 400,
    };
  }
  // return querySnapshot;
};

export const readDocument = async (options: {
  slice: string, workspaceId: string, projectId: string, id: string
}) => {
  const {
    id,
    slice,
    workspaceId,
    projectId,
  } = options;

  // @ts-ignore
  try {
    let result = {};
    const querySnapshot = await getDocs(collection(db, slice, workspaceId, projectId));
    querySnapshot.forEach((doc) => {
      if (doc?.id === workspaceId) {
        // const documentId = doc?.id;
        const snapshotData = doc.data().find((item: any) => item.id === id);
        result = {
          id: 'TODO_ASSIGN_ID_IN_FIREBASE_UTIL',
          ...snapshotData
        };
      }
    });

    console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Fetched  /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}\n`, result);
    return result;
  } catch (e) {
    console.error(`${firebaseFirestoreSymbol}🟥 ERROR: Fetching /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}\n`, e);
    console.log(e);
    return null;
  }
};

export const updateDocument = async (options: {
  slice: string,
  workspaceId: string,
  projectId: string,
  id: string,
  data: any
}) => {
  const {
    id,
    slice,
    workspaceId,
    projectId,
    data,
  } = options;

  try {
    const docRef = doc(db, slice, workspaceId, projectId, id);

    await updateDoc(docRef, data);
    console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Updated  /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}\n`, docRef.id, data);
    return {
      data: {
        // ...data,
        id: docRef.id,
        ...data,
      },
      status: 200,
    };
  } catch (e) {
    console.error(`${firebaseFirestoreSymbol}🟥 ERROR: Updating /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}\n`);
    console.log(e);

    return {
      error: e,
      message: `Failed writing to Firebase Store in collection ${slice}`,
      status: 400,
    };
  }
};

export const deleteDocument = async (options: {
  slice: string,
  id: string
  workspaceId?: string,
  projectId?: string,
}) => {
  const {
    id,
    slice,
    workspaceId,
    projectId,
  } = options;

  try {
    const docRef = workspaceId && projectId
      ? doc(db, slice, workspaceId, projectId, id)
      : doc(db, slice, id);
    await deleteDoc(docRef);

    console.log(`${firebaseFirestoreSymbol}🟩 SUCCESS: Deleted  /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}\n`, docRef.id);
    return {
      data: docRef,
      status: 200,
    };
  } catch (e) {
    console.error(`${firebaseFirestoreSymbol}🟥 ERROR: Deleting /%c${slice}`, 'font-weight: bold; color: cyan', `=> /${workspaceId}/${projectId}/${id}`);
    console.log(e);
    return {
      data: null,
      status: 404,
    };
  }
};


export const initDB = async (collections: string[] = [
  ''
]): Promise<void> => {
  const createPlaceholderDocument = async (collectionName: string): Promise<void> => {
    if (collectionName) {
      const now = new Date().toISOString();
      const placeholder: IProjectResource = {
        dateCreated: now,
        dateUpdated: now,
        id: '_init',
        name: 'Placeholder',
        projectId: '_init'
      };

      const docRef = doc(collection(db, collectionName), placeholder.id);
      await setDoc(docRef, placeholder);
    }
  };

  const promises = collections.map(createPlaceholderDocument);
  await Promise.all(promises);
};

// Function to backup Firestore database
export const backupDB = async (collections: string[], updateProgress?: (arg: { progress: number, collection: string }) => void): Promise<any> => {
  const backupData: { [key: string]: any } = {};
  log('DB: Backup Init', collections);

  const totalCollections = collections.length;

  for (let i = 0; i < totalCollections; i++) {
    const collectionName = collections[i];
    try {
      console.log(`Fetching collection: ${collectionName}`);
      const collectionRef = collection(db, collectionName);
      const collectionSnapshot = await getDocs(collectionRef);

      const docs = collectionSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log(`Fetched ${docs.length} documents from collection: ${collectionName}`);
      backupData[collectionName] = docs;

      // Update progress
      if (updateProgress) {
        const progressValue = Math.round(((i + 1) / totalCollections) * 100);
        updateProgress({
          collection: collectionName,
          progress: progressValue
        });
      }
    } catch (error) {
      console.error(`Error backing up collection: ${collectionName}`, error);
    }
  }

  return backupData;
};


// Function to restore Firestore database from backup
export const restoreDB = async (
  backupData: { [key: string]: any },
  updateProgress?: (arg: { progress: number, collection: string }) => void
): Promise<void> => {
  const collections = Object.keys(backupData);
  const totalCollections = collections.length;

  for (let i = 0; i < totalCollections; i++) {
    const collectionName = collections[i];
    const docsData = backupData[collectionName];

    for (const docData of docsData) {
      const docRef = doc(collection(db, collectionName), docData.id);
      await setDoc(docRef, docData);
    }

    // Update progress
    if (updateProgress) {
      const progressValue = Math.round(((i + 1) / totalCollections) * 100);
      updateProgress({
        collection: collectionName,
        progress: progressValue
      });
    }
  }
};


// initFirestore([
//   'app',
//   'features',
//   'users',
//   'workspaces',
//   'projects',

//   'characters',
//   'creatures',
//   'locations',
//   'objects',
//   'transports',

//   'controls',
//   'documents',
//   'graphs',
//   'dialogues',
//   'segments',
// ]).then(() => {
//   console.log('Collections initialized.');
// }).catch((error) => {
//   console.error('Error initializing collections:', error);
// });

// Example usage
// TODO:
// - Delete FieldFromDocument: https://firebase.google.com/docs/firestore/manage-data/delete-data#fields
// - Delete Collection: https://firebase.google.com/docs/firestore/manage-data/delete-data#collections
// #endregion