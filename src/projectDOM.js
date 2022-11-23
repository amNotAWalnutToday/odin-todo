import createProject from './project';
import {removeProject} from './project';
import changeTab from './tabs';

const showProject = (() => {

    const pushToNav = child => {
        const _list = document.querySelector('.nav-project')

        //div
        const _container = document.createElement('div')
        _container.setAttribute('class','project button');
        _container.setAttribute('tabindex','0');
        _container.setAttribute('id',child.title);
        _container.addEventListener('click', e => displayProject(child));
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

    const displayProject = project => {
        if(changeTab.tab === project.title) return;
        hideProject();
        changeTab.tab = project.title;
        console.log(changeTab.tab);
        const _page = document.querySelector('#todo');
        _page.innerHTML +=  `<div>
                                <h1>${project.title}</h1>
                                <button id="add-task" class="add">+</button>    
                            </div>
                            <div>
                                <div>
                                    <label>Due Date</label>
                                    <input type="date"/>
                                </div>
                                <div>
                                    <label>Important</label>
                                    <input id="project-${project.title}" type="checkbox"/>
                                </div>
                            </div>`; 
        document.querySelector('#add-task').addEventListener('click',displayTask);
        document.querySelector('[type=checkbox]').addEventListener('click', e => setImportant(project.title));
        setChecked(project);
    }

    const setImportant = id => {
        const check = document.querySelector(`[type='checkbox']`);
        const index = createProject.returnIndex(id);
        console.log(index,id);
        check.checked 
            ? createProject.projects[index].priority = 'important'
            : container.remove();
    }

    const setChecked = id => {
        const check = document.querySelector('[type="checkbox"]')
        id.priority === 'important'
            ? check.checked = true
            : check.checked = false;
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
        pushToNav,
        displayProject,
    }
})();

export default showProject;