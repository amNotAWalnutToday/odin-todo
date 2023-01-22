import './styles.css';
import getFirebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import createProject from './project';
import addForm from './addForm';
import showProject from './projectDOM';
import changeTab from './tabs';
import storage from './storage';

const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const eventAdder = (() => {

    const button = document.querySelector('#add-button');
    
    const addEvent = () => {
        button.addEventListener('click', addForm.showForm);
    }

    const addE = () => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                buttons.forEach(button => {
                    button.classList.remove('selected');
                })
                e.target.classList.add('selected');
            })
        });
    }

    const addSave = () => {
        document.querySelector("#save-btn")
            .addEventListener('click', e => {
                storage.addProjectToStore();
                storage.addHistorytoFirestore();
            });
    }

    return {
        addEvent,
        addE,
        addSave,
    }
})();

const defaultProject = () => {
    const _element = createProject.create('ToDo List','','','','');
    showProject.pushToNav(_element);
}

const loadUp = () => {    
    if(!localStorage.getItem('projects')){
        defaultProject();
    }
    storage.getProjectsFromFirestore();
    storage.getHistoryFromFirestore();

    eventAdder.addEvent();
    eventAdder.addE();
    eventAdder.addSave();
    
    changeTab.setButtons();
    console.log(changeTab.tab);

    if(createProject.projects.length > 0){
        showProject.displayProject(createProject.projects[0]);
    }
}

const store = () => {

}

window.addEventListener('beforeunload' , store);

loadUp();

export default eventAdder;
export { db };