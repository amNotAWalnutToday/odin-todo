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
            return `<div>
                        <p>${project.title}</p>
                        <p>${project.dueDate}</p>
                        <p>${project.priority}</p>
                    </div>`;
        });
    }

    const changeAll = (e) => {
        tab = 'all';
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>All</h1>
        </div>`;
        _page.innerHTML += mapProject();
    }

    return {
        tab,
        setButtons,
    }
})();

export default changeTab;