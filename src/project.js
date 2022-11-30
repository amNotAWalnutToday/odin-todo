import showProject from './projectDOM';
import changeTab from './tabs';
import eventAdder from './index';
import removeForm from './removeForm';
import { compareAsc, endOfDay, endOfToday, endOfYesterday, isAfter, isBefore, isPast } from 'date-fns';
import endOfTomorrow from 'date-fns/endOfTomorrow';

const project = (title,description,dueDate,priority,complete) => {

    dueDate = 'To Be Added';

    return { title, description, dueDate, priority, complete };
}

const task = (project, task, dueDate, priority) => {

    return { project, task, dueDate, priority };
}

const createProject = (() => {

    let projects = [];
    let tasks = [];
    let history = [];
    let reverseHistory = [];
    let popupForm = false;

    const getTitleInput = () => {
        const _value = document.querySelector('#title').value;
        if (projects.filter(project => project.title === _value) != '') return;
        const _element = create(_value,'','','','');
        showProject.pushToNav(_element);
        eventAdder.addE();
        removeForm.remove();
    }

    const sortDate = () => {
        return projects.sort((a,b) => {
            let date1 = a.dueDate.split("/");
            let date2 = b.dueDate.split("/");
            
            return compareAsc(new Date(date1[2],date1[1]-(1),date1[0]),new Date(date2[2],date2[1]-(1),date2[0]));
        })
    }

    const sortHistory = () => {
        const _history = history.slice(0);
        _history.reverse();
        for(let i = 0; i < history.length; i++) {
            reverseHistory.push(_history[i]);
        }
        return _history;
    }

    const checkPast = (date) => {
        const _date = date.split('/').reverse();
        const _newDate = new Date(_date[0],_date[1]-(1),_date[2]);
        const _today = endOfYesterday();

        console.log(_newDate);
        return isBefore(_newDate, _today);
    }

    const pushHistory = () => {
        const _projects = projects.filter(project => {
           
            if(checkPast(project.dueDate)) return project;
        })

        console.log(_projects);
        
        _projects.forEach(project => {
            project.complete = 'failed';
            history.push(project);
            delButton(project.title);
            removeProject._removeProject(project.title);
        })
    }

    const delButton = (project) => {
        document.querySelector(`[id="${project}"]`).remove();
    }

    const create = (title,description,dueDate,priority,complete) => {

        const _project = project(title,description,dueDate,priority,complete);
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

    const returnHistory = project => {
        for(let i = 0; i < history.length; i++){
            if(project === history[i].title) return i;
        }
    }

    return {
        create,
        getTitleInput,
        returnIndex,
        returnHistory,
        projects,
        tasks,
        history,
        reverseHistory,
        sortDate,
        sortHistory,
        pushHistory,
        delButton,
        popupForm,
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
        _removeProject,
    }
})();

export default createProject;
export {removeProject};