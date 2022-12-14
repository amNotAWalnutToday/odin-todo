import './styles.css';
import createProject from './project';
import addForm from './addForm';
import showProject from './projectDOM';
import changeTab from './tabs';
import storage from './storage';

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

    return {
        addEvent,
        addE,
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

    storage.getHistory();
    storage.getProjects();

    eventAdder.addEvent();
    eventAdder.addE();
    
    changeTab.setButtons();
    console.log(changeTab.tab);

    if(createProject.projects.length > 0){
        showProject.displayProject(createProject.projects[0]);
    }
    
}

const store = () => {
    storage.storeProjects();
    storage.storeHistory();
}

window.addEventListener('beforeunload' , store);

loadUp();

export default eventAdder;