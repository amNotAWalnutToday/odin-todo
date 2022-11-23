import './styles.css';
import createProject from './project';
import addForm from './addForm';
import removeForm from './removeForm';
import showProject from './projectDOM';
import changeTab from './tabs';

const eventAdder = (() => {
    const button = document.querySelector('#add-button');
    
    const addEvent = () => {
        button.addEventListener('click', addForm.showForm);
    }

    return {
        addEvent,
    }
})();

const defaultProject = () => {
    const _element = createProject.create('ToDo List','','','');
    console.log(_element);
    showProject.pushToNav(_element);
}

defaultProject();
eventAdder.addEvent();