import { collection, addDoc, doc, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import createProject from './project';
import showProject from './projectDOM';
import changeTab from './tabs';
import { db } from './index';

const storage = (() => {

    const storeProjects = () => {
        let _projects = [];
        createProject.projects.forEach(value => _projects.push(value));

        localStorage.setItem('projects', JSON.stringify(_projects));
    }

    const storeProjectsInFirestore = async (project) => {
        try {
            const docRef = await addDoc(collection(db, "projects"), {
                ...project
            });
            console.log("Added Projects To Database", docRef.id);
        } catch(e) {
            console.error("Cannot store Projects ", e);
        }
    }

    const addProjectToStore = async () => {
        await clearProjectsFromFirebase();
        const _projects = [...createProject.projects].reverse();
        _projects.forEach(project => {
            storeProjectsInFirestore(project);
        })
    }

    const getProjects = () => {
        if(localStorage.getItem('projects')){
            const _projects = JSON.parse(localStorage.getItem('projects'))
            _projects.forEach(value => {
                createProject.projects.push(value);
                showProject.pushToNav(value);
            });
        }
    }

    const getProjectsFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        querySnapshot.forEach(doc => {
            pushProjectsToDomFromFirebase(doc.data());
        })
    }

    const pushProjectsToDomFromFirebase = (project) => {
        createProject.projects.push(project);
        showProject.pushToNav(project);
    }

    const storeHistory = () => {
        let _history = [];
        createProject.history.forEach(value => _history.push(value));

        localStorage.setItem('history' , JSON.stringify(_history,
        (key, value) => {
            return key = value;
        }));
    }

    const storeHistoryInFirestore = async (history) => {
        try {
            const docRef = await addDoc(collection(db, "history"), {
                ...history
            });
            console.log("Added History To Database", docRef.id);
        } catch(e) {
            console.error('Could not store history', e);
        }
    }

    const addHistorytoFirestore = async () => {
        await clearHistoryFromFirebase();
        const history = [...createProject.history];
        history.forEach(project => {
            storeHistoryInFirestore(project);
        })
    }

    const getHistory = () => {
        if(localStorage.getItem('history')){
            const _history = JSON.parse(localStorage.getItem('history'), 
            (key, value) => {
                return key = value;
            });
            _history.forEach(value => createProject.history.push(value));
        }
    }

    const getHistoryFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "history"));
        querySnapshot.forEach(doc => {
            createProject.history.push(doc.data());
        })
    }

    const clearHistory = () => {
        if(localStorage.getItem('history')){
            localStorage.removeItem('history')
            createProject.history = [];
            createProject.reverseHistory = [];
            changeTab.changeHistory();
        }
    }

    const clearProjectsFromFirebase = async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        querySnapshot.forEach(async theDoc => {
            await deleteDoc(doc(db, "projects", theDoc.id));
        });
    }

    const clearHistoryFromFirebase = async () => {
        const querySnapshot = await getDocs(collection(db, "history"));
        querySnapshot.forEach(async theDoc => {
            await deleteDoc(doc(db, "history", theDoc.id));
        });
    }

    const addFirebaseDatabase = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Anne",
                last: "Last",
                born: '2000',
            });
            console.log("Document written with ID: ", docRef.id);
        } catch(e) {
            console.error('Error adding document ', e);
        }
    }

    return {
        storeProjects,
        getProjects,
        storeHistory,
        getHistory,
        clearHistory,
        addFirebaseDatabase,
        addProjectToStore,
        storeProjectsInFirestore,
        getProjectsFromFirestore,
        addHistorytoFirestore,
        getHistoryFromFirestore,
    }
})();

export default storage;

