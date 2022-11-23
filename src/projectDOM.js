import createProject from './project';
import {removeProject} from './project';

const showProject = (() => {

    const pushToNav = (child) => {
        const _list = document.querySelector('.nav-project')
        const _container = document.createElement('div')
        _container.setAttribute('class','project');
        _container.setAttribute('id',child.title);
        _list.appendChild(_container);
        const _elementTitle = document.createElement('p');
        _elementTitle.textContent = child.title;
        _container.appendChild(_elementTitle);
        _container.appendChild(deleteButton(child.title));
    }

    const deleteButton = (title) => {
        const _button = document.createElement('button');
        _button.setAttribute('id',title);
        _button.textContent = 'X';
        _button.addEventListener('click', e => {
            for(let i = 0; i < createProject.projects.length; i++){
                if (createProject.projects[i].title === _button.id){ 
                    document.querySelector(`[id="${_button.id}"]`).remove()
                    removeProject._removeProject(_button.id);
                }
            };
        });
        return _button;
    }

    return {
        pushToNav
    }
})();

export default showProject;