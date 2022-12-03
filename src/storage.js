import createProject from './project';
import showProject from './projectDOM';
import changeTab from './tabs';
import {project} from './project';

const storage = (() => {

    const storeProjects = () => {
        let _projects = [];
        createProject.projects.forEach(value => _projects.push(value));

        localStorage.setItem('projects', JSON.stringify(_projects));
    }

    const getProjects = () => {
        if(localStorage.getItem('projects')){
            const _projects = JSON.parse(localStorage.getItem('projects'))
            _projects.forEach(value => {
                createProject.projects.push(value);
                showProject.pushToNav(value);
            });
        }
    }

    const checkProjects = () => {
        if(localStorage.getItem('projects') === '[]'){
            localStorage.removeItem('projects');
        }
    }

    const storeHistory = () => {
        let _history = [];
        createProject.history.forEach(value => _history.push(value));

        localStorage.setItem('history' , JSON.stringify(_history,
        (key, value) => {
            return key = value;
        }));
    }

    const getHistory = () => {
        if(localStorage.getItem('history')){
            const _history = JSON.parse(localStorage.getItem('history'), 
            (key, value) => {
                return key = value;
            });
            _history.forEach(value => createProject.history.push(value));
        }
    }

    return {
        storeProjects,
        getProjects,
        storeHistory,
        getHistory,
    }
})();

export default storage;

