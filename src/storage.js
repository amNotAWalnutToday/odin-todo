import createProject from './project';
import showProject from './projectDOM';
import changeTab from './tabs';

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

    const clearHistory = () => {
        if(localStorage.getItem('history')){
            localStorage.removeItem('history')
            createProject.history = [];
            createProject.reverseHistory = [];
            changeTab.changeHistory();
        }
    }

    return {
        storeProjects,
        getProjects,
        storeHistory,
        getHistory,
        clearHistory,
    }
})();

export default storage;

