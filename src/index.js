import './styles.css';
import addForm from './addForm';

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
    const button = document.querySelector('.add')
    
    const addEvent = () => {
        button.addEventListener('click', );
    }
    return {
        addEvent
    }
})();

createProject.create('default','this is test','today','high');
addForm.showForm();