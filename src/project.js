import showProject from './projectDOM';

const project = (title,description,dueDate,priority) => {

    return { title, description, dueDate, priority }
}

const createProject = (() => {

    let projects = [];

    const getTitleInput = () => {
        const _value = document.querySelector('#title').value;
        const _element = create(_value,'','','');
        showProject.pushToNav(_element);
    }

    const create = (title,description,dueDate,priority) => {

        const _project = project(title,description,dueDate,priority);
        projects.push(_project);
        console.log(projects);
        return _project; 
    }

    return {
        create,
        getTitleInput,
        projects,
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