import removeForm from './removeForm';
import createProject from './project';
import showProject from './projectDOM';
import changeTab from './tabs';

const addForm = (() => {

    const createElement = element => {
        const _element = document.createElement(element);
        return _element;
    }

    const setAttribute = (element,type,attribute) => {
        const _element = createElement(element);
        _element.setAttribute(type,attribute);
        return _element;
    }

    const appendDiv = () => {
        const _element = setAttribute('div','class','form');
        _element.classList.add('hide');
        popup.appendChild(_element)
        return _element
    } 

    const formContainer = appendDiv();

    const appendHeader = name => {
        const _element = setAttribute('h1','class','header');
        _element.textContent = name;
        formContainer.appendChild(_element);
    }

    const appendLabel = name => {
        const _element = setAttribute('label','for','title');
        _element.textContent = name;
        formContainer.appendChild(_element);
    }

    const appendInput = () => {
        const _element = setAttribute('input','id','title');
        _element.setAttribute('value','New Project');
        formContainer.appendChild(_element);
    }

    const appendDescriptionLabel = name => {
        const _element = setAttribute('label','for','description')
        _element.textContent = name;
        formContainer.appendChild(_element);
    }

    const appendTextArea = () => {
        const _element = setAttribute('textarea','id','description');
        _element.setAttribute('rows','3');
        _element.setAttribute('placeholder','Enter a Description');
        formContainer.appendChild(_element)
    }

    const appendButtonContainer = () => {
        const _element = setAttribute('div','class','formButtons')
        formContainer.appendChild(_element);
        return _element;
    }

    const buttonContainer = appendButtonContainer();

    const appendCancelButton = name => {
        const _element = setAttribute('button','id','cancel');
        _element.textContent = name;
        _element.addEventListener('click', removeForm.remove);
        buttonContainer.appendChild(_element);
    }

    appendCancelButton('Cancel');

    const appendCreateButton = name => {
        const _element = setAttribute('button','id','create');
        _element.textContent = name;
        _element.addEventListener('click', createProject.getTitleInput);
        buttonContainer.appendChild(_element);
    }

    appendCreateButton('Create');

    const fadeContainer = () => {
        const _element = document.querySelector('#container');
        _element.classList.add('fade');

        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.setAttribute('disabled','true');
        });

        const projects = document.querySelectorAll('.project')
        projects.forEach(button => {
            button.setAttribute('class','project button');
        });
    }
    
    const showForm = () => {
        if (createProject.popupForm) return;
        createProject.popupForm = true;
        appendTextArea();
        appendDescriptionLabel('Description');
        appendInput();
        appendLabel('Title');
        appendHeader('Add Project');
        
        fadeContainer();
        formContainer.classList.remove('hide');
        showProject.hideProject();
        changeTab.tab = '';
    }

    return {
        showForm,
    };
})();

export default addForm