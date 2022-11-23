import createProject from './project';
import {removeProject} from './project';
import changeTab from './tabs';

const showProject = (() => {

    const pushToNav = child => {
        const _list = document.querySelector('.nav-project')

        //div
        const _container = document.createElement('div')
        _container.setAttribute('class','project');
        _container.setAttribute('id',child.title);
        _container.addEventListener('click', e => displayProject(child.title));
        _list.appendChild(_container);

        //project title
        const _elementTitle = document.createElement('p');
        _elementTitle.textContent = child.title;
        _container.appendChild(_elementTitle);

        //button
        _container.appendChild(deleteButton(child.title));
    }

    const deleteButton = title => {
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

    const displayProject = title => {
        if(changeTab.tab == title) return;
        hideProject();
        changeTab.tab = title;
        console.log(changeTab.tab);
        const _page = document.querySelector('#todo');
        _page.innerHTML +=  `<div>
                                <h1>${title}</h1>
                                <button id="add-task">+</button>    
                            </div>
                            <div>
                                <label>Due Date</label>
                                <input type="date"/>
                                <label>Important</label>
                                <input type="checkbox"/>
                            </div>`; 
        document.querySelector('#add-task').addEventListener('click',displayTask);
    }

    const displayTask = () => {
        const _task = document.querySelector('#tasks');
        _task.innerHTML = '<h1>Hello world</h1>'
    }

    const hideProject = () => {
        const _page = document.querySelector('#todo');
        _page.innerHTML = '';
    }

    return {
        pushToNav
    }
})();

export default showProject;