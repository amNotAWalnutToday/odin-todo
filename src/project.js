const project = (title,description,dueDate,priority) => {

    return { title, description, dueDate, priority }
}

const createProject = (() => {
    const getTitleInput = () => {
        const _value = document.querySelector('#title').value;
        create(_value,'','','');
    }

    const create = (title,description,dueDate,priority) => {

        const _project = project(title,description,dueDate,priority);
        console.log(_project); 
    }

    return {
        create,
        getTitleInput,
    }
})();

export default createProject;