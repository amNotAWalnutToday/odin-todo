import createProject from "./project";

const removeForm = (() => {

    const unfadeContainer = () => {
        const _container = document.querySelector('#container');
        _container.classList.remove('fade');
    }

    const activateButtons = () => {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.disabled = false;
        })

        const projects = document.querySelectorAll('.project')
        projects.forEach(project =>{
            project.classList.add('button');
        })
    }

    const remove = () => {
        const form = document.querySelector('.form');
        form.classList.add('hide');
        for(let i = 5; i > 0; i--){
            form.removeChild(form.lastChild);
        }
        unfadeContainer();
        activateButtons();
        createProject.popupForm = false;
    }

    return {
        remove
    };
})();

export default removeForm;