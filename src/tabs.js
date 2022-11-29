import { isToday } from "date-fns";
import createProject from "./project";

const changeTab = (() => {
    
    let tab = '';

    //navbar buttons
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
        _today.addEventListener('click', changeToday);
    }

    //change completion
    const getChecked = () => {
        const checkbox = document.querySelectorAll('[type="checkbox"]')
        checkbox.forEach(box => box.addEventListener('click',  setComplete));
    }

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
    //filters
    const checkToday = (date) => {
        const _date = date.split('/').reverse();
        const _newDate = new Date(_date[0],_date[1]-(1),_date[2]);

        return isToday(_newDate);
    }
    //maps
    const mapProject = (filter) => {
        const _projects = createProject.projects.filter(project => {
            
            if (checkToday(project.dueDate) && filter === 'today') return project;
            if (filter === 'none') return project;
        })


        return _projects.map(project => {
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
    
    //tab contents
    const changeAll = (e) => {
        tab = 'all';
        createProject.sortDate();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>All</h1>
        </div>`;
        _page.innerHTML += mapProject('none');

        getChecked();
        setChecked();
    }

    const changeToday = (e) => {
        tab = 'today';
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML =
        `<div>
            <h1>Today</h1>
        </div>`; 
        _page.innerHTML += mapProject('today');

        getChecked();
        setChecked();
    }

    return {
        tab,
        setButtons,
    }
})();

export default changeTab;