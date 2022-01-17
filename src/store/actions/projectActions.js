import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/fbConfig";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to datatbase
    // const firestore = getFirestore();
    const colRef = doc(db, 'projects');
    colRef.setDoc({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
    
  }

}