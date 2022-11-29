import './styles.css';
import createProject from './project';
import addForm from './addForm';
import removeForm from './removeForm';
import showProject from './projectDOM';
import changeTab from './tabs';
import { allIcon } from './svgs';

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
    defaultProject();
    eventAdder.addEvent();
    eventAdder.addE();
    changeTab.setButtons();
    showProject.displayProject(createProject.projects[0]);
    console.log(changeTab.tab);
}

loadUp();

export default eventAdder