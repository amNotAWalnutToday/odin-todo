import './styles.css';
import addForm from './addForm';
import removeForm from './removeForm';

const project = (title,description,dueDate,priority) => {

    return { title, description, dueDate, priority }
}

const createProject = (() => {
    const create = (title,description,dueDate,priority) => {

        const _project = project(title,description,dueDate,priority);
        console.log(_project); 
    }

    return {
        create,
    }
})();

const eventAdder = (() => {
    const button = document.querySelector('#add-button');
    
    const addEvent = () => {
        button.addEventListener('click', addForm.showForm);
    }

    return {
        addEvent,
    }
})();

createProject.create('default','this is test','today','high');
eventAdder.addEvent();