import createProject from './project';
import {removeProject} from './project';
import changeTab from './tabs';
import eventAdder from './index';
import { format } from 'date-fns'

const showProject = (() => {

    //navbar DOM
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
        _elementTitle.setAttribute('class','unselect');
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

    //page display
    const displayProject = project => {
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
                                    <label for="date">Due Date</label>
                                    <input id="date" type="date" value="${project.dueDate.replace(/\//g,'-').split("-").reverse().join("-")}"/>
                                </div>
                                <div>
                                    <label for="priority">Important</label>
                                    <input id="priority" type="checkbox"/>
                                </div>
                            </div>`; 
        document.querySelector('#add-task').addEventListener('click',displayTask);
        document.querySelector('#priority').addEventListener('click', e => setImportant(project.title));
        document.querySelector('[type="date"]').addEventListener('change', e => setDate(project.title));
        setChecked(project);
    }
    //change date
    const setDate = id => {
        const date = document.querySelector('[type="date"]');
        const index = createProject.returnIndex(id);
        const _dueDate = date.value.split("-");
        const _date = format(new Date(_dueDate[0],_dueDate[1]-(1),_dueDate[2]),'dd/MM/yyyy');

        createProject.projects[index].dueDate = _date;
    }

    //change priority
    const setImportant = id => {
        const check = document.querySelector(`#priority`);
        const index = createProject.returnIndex(id);

        check.checked 
            ? createProject.projects[index].priority = 'important'
            : createProject.projects[index].priority = '';
    }

    const setChecked = id => {
        const check = document.querySelector('#priority')
        id.priority === 'important'
            ? check.checked = true
            : check.checked = false;
    }

    //tasks
    const displayTask = () => {
        const _task = document.querySelector('#tasks');
        _task.innerHTML = '<h1>Hello world</h1>'
    }

    //remove from main page
    const hideProject = () => {
        const _page = document.querySelector('#todo');
        _page.innerHTML = '';
    }

    return {
        pushToNav,
        displayProject,
        hideProject,
    }
})();

export default showProject;