import './styles.css';
import createProject from './project';
import addForm from './addForm';
import removeForm from './removeForm';

const eventAdder = (() => {
    const button = document.querySelector('#add-button');
    
    const addEvent = () => {
        button.addEventListener('click', addForm.showForm);
    }

    return {
        addEvent,
    }
})();

eventAdder.addEvent();