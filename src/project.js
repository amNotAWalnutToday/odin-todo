import showProject from './projectDOM';
import changeTab from './tabs';
import eventAdder from './index';

const project = (title,description,dueDate,priority) => {

    return { title, description, dueDate, priority }
}

const task = (project, task, dueDate, priority) => {

    return { project, task, dueDate, priority };
}

const createProject = (() => {

    let projects = [];
    let tasks = [];

    const getTitleInput = () => {
        const _value = document.querySelector('#title').value;
        if (projects.filter(project => project.title === _value) != '') return;
        const _element = create(_value,'','','');
        showProject.pushToNav(_element);
        eventAdder.addE();
    }

    const create = (title,description,dueDate,priority) => {

        const _project = project(title,description,dueDate,priority);
        projects.push(_project);
        console.log(projects);
        return _project; 
    }

    const getTaskInput = () => {
        //creates a task and
        //gets title from input
    }

    const createTask = (project, task, dueDate, priority) => {
        const _task = task(project, task, dueDate, priority);
        tasks.push(_task);

        return _task;
    }

    const returnIndex = project => {
        for(let i = 0; i < projects.length; i++){
            if(project === projects[i].title) return i;
        }
    }

    return {
        create,
        getTitleInput,
        returnIndex,
        projects,
        tasks,
    }
})();

const removeProject = (() => {
    
    const _removeProject = project => { 
        for(let i = 0; i < createProject.projects.length; i++){
            console.log({project},createProject.projects[i]);
            if(project === createProject.projects[i].title) createProject.projects.splice(i,1);
        }
    }
    
    return {
        _removeProject
    }
})();

export default createProject;
export {removeProject};