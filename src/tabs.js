import createProject from "./project";

const changeTab = (() => {
    
    let tab = '';

    const getButtons = button => {
        return document.querySelector(button)
    }

    const setButtons = () => {
        const _all = getButtons('#all');
        const _today = getButtons('#today');
        const _thisWeek = getButtons('#this-week');
        const _important = getButtons('#important');
        const _history = getButtons('#history');

        

        _all.addEventListener('click', changeAll);
    }

    const mapProject = () => {
        return createProject.projects.map(project => {
            return `<div class="card ${project.priority}">
                        <h2>${project.title}</h2>
                        <div class="info">
                            <p><span class="bold">Due:</span> ${project.dueDate}</p>
                            <div>
                                <label for="${project.title}" class="bold">Complete?</label>
                                <input id="${project.title}" type="checkbox">
                            </div>
                        </div>
                    </div>`;
        });
    }

    const changeAll = (e) => {
        tab = 'all';
        createProject.sortDate();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>All</h1>
        </div>`;
        _page.innerHTML += mapProject();

        const checkbox = document.querySelectorAll('input')
        checkbox.forEach(box => box.addEventListener('click',  setComplete));
        console.log(checkbox)
        setChecked();
    }

    //change completion
    const setComplete = (e) => {
        const check = document.querySelectorAll(`[type='checkbox']`);
        
        check.forEach(box => {
            
            console.log(box);
            const index = createProject.returnIndex(box.id);
            
            box.checked
                ? createProject.projects[index].complete = 'complete'
                : createProject.projects[index].complete = '';
        });

        console.table(createProject.projects);
    }

    const setChecked = () => {
        const check = document.querySelectorAll(`[type='checkbox']`);
        
        check.forEach(box => {
            const index = createProject.returnIndex(box.id);
            const complete = createProject.projects[index].complete;
            
            complete === 'complete'
                ? box.checked = true
                : box.checked = false;
        });
    }

    return {
        tab,
        setButtons,
    }
})();

export default changeTab;