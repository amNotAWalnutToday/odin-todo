import { isToday, isThisWeek, format } from "date-fns";
import createProject, { removeProject } from "./project";
import storage from "./storage";
import { allIcon, todayIcon, calendarIcon, priorityIcon, historyIcon, deleteIcon } from "./svgs";

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
        _thisWeek.addEventListener('click', changeWeek);
        _important.addEventListener('click', changeImportant);
        _history.addEventListener('click', changeHistory);
    }

    const setClearHistory = () => {
        const _clearHistory = getButtons('#clear-history')

        _clearHistory.addEventListener('dblclick', storage.clearHistory)
    }

    //change completion
    const getChecked = () => {
        const checkbox = document.querySelectorAll('[type="checkbox"]')
        checkbox.forEach(box => box.addEventListener('click',  setComplete));
    }

    const setComplete = (e) => {
        const check = document.querySelectorAll(`[type='checkbox']`);
        
        check.forEach(box => {
            const index = createProject.returnIndex(box.id);
            
            if(box.checked){
                createProject.history.push(createProject.projects[index]);
                const historyIndex = createProject.returnHistory(box.id);
                createProject.history[historyIndex].dueDate = format(new Date(), 'dd/MM/yyyy');

                createProject.delButton(box.id);
                createProject.projects[index].complete = 'complete'
                removeProject._removeProject(box.id);
            } else createProject.projects[index].complete = '';
        });
        changeAll();
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

    const checkWeek = (date) => {
        const _date = date.split('/').reverse();
        const _newDate = new Date(_date[0],_date[1]-(1),_date[2]);

        return isThisWeek(_newDate, { weekStartsOn: 1 });
    }

    //maps
    const mapProject = (filter) => {
        const _projects = createProject.projects.filter(project => {
            
            if (project.complete != '') return;
            if (checkToday(project.dueDate) && filter === 'today') return project;
            if (checkWeek(project.dueDate) && filter === 'week') return project;
            if (project.priority === 'important' && filter === 'priority') return project;
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

    const mapHistory = () => {
        return createProject.reverseHistory.map(project => {
            if(project.complete === 'complete'){
                return `<div class="card ${project.complete}">
                            <h2>${project.title}</h2>
                            <div class="info">
                                <p><span class="bold">Finished: </span> ${project.dueDate}</p>
                                <p><span class="bold">Complete! </span></p>
                            </div>
                        </div>`;
            }else {
                return `<div class="card ${project.complete}">
                            <h2>${project.title}</h2>
                            <div class="info">
                                <p><span class="bold">Finished: </span> ${project.dueDate}</p>
                                <p><span class="bold">Failed! </span></p>
                            </div>
                        </div>`;
            }
        });
    }
    
    //tab contents
    const changeAll = (e) => {
        createProject.pushHistory();
        tab = 'all';
        createProject.sortDate();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>${allIcon} All</h1>
        </div>`;
        _page.innerHTML += mapProject('none');

        getChecked();
        setChecked();
    }

    const changeToday = (e) => {
        createProject.pushHistory();
        tab = 'today';
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML =
        `<div>
            <h1>${todayIcon}Today</h1>
        </div>`; 
        _page.innerHTML += mapProject('today');

        getChecked();
        setChecked();
    }

    const changeWeek = () => {
        createProject.pushHistory();
        tab = 'week';
        createProject.sortDate();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>${calendarIcon}This Week</h1>    
        </div>`;
        _page.innerHTML += mapProject('week');

        getChecked();
        setChecked();
    }

    const changeImportant = () => {
        createProject.pushHistory();
        tab = 'important';
        createProject.sortDate();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>${priorityIcon}Important</h1>    
        </div>`;
        _page.innerHTML += mapProject('priority');

        getChecked();
        setChecked();
    }

    const changeHistory = () => {
        
        createProject.pushHistory();
        tab = 'history';
        createProject.sortHistory();
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>${historyIcon}History</h1>
            <button id="clear-history">${deleteIcon}</button>    
        </div>`;
        _page.innerHTML += mapHistory();

        setClearHistory();

        createProject.reverseHistory.splice(0);
    }

    return {
        tab,
        setButtons,
        changeHistory,
    }
})();

export default changeTab;