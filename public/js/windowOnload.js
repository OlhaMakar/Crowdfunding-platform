let filters = {};

window.onload = () => {
    filters = { statusAllSelect: 1, categoriesSelect: 0, select_area: 0, select_communities: 0 };

    projectFilterInit();
};

const projectFilterInit = () => {

    let categoriesSelect = document.getElementsByClassName("categoriesSelect");
    Array.from(categoriesSelect).forEach(function (element) {
        element.addEventListener("click", (event) => {
            if (filters.categoriesSelect != parseInt(event.toElement.value) && event.toElement.value) {
                filters.categoriesSelect = parseInt(event.toElement.value);
                projectFilter();
            }
        });
    });

    let select_area = document.getElementsByClassName("select_area");
    Array.from(select_area).forEach(function (element) {
        element.addEventListener("click", (event) => {
            if (filters.select_area != event.toElement.value && event.toElement.value) {
                filters.select_area = event.toElement.value;
                projectFilter();
                communities.forEach(community => {
                    if (event.toElement.value == 0) {
                        document.getElementById(`communities-${community.id}-styler`).style.display = 'block';
                        return;
                    }
                    if (event.toElement.value == community.area_id) {
                        document.getElementById(`communities-${community.id}-styler`).style.display = 'block';
                    } else if (event.toElement.value != community.area_id) {
                        document.getElementById(`communities-${community.id}-styler`).style.display = 'none';
                    }
                });

            }
        });
    });

    let select_communities = document.getElementsByClassName("select_communities");
    Array.from(select_communities).forEach(function (element) {
        element.value = parseInt(((element.id.split("-"))[1]));
        element.addEventListener("click", (event) => {
            if (filters.select_communities != event.toElement.value && event.toElement.value) {
                filters.select_communities = event.toElement.value;
                projectFilter();
            }
        });
    });

    let statusAllSelect = document.getElementById("statusAllSelect");
    statusAllSelect.addEventListener("click", (event) => {
        filters.statusAllSelect = event.toElement.checked ? 1 : 0;
        projectFilter();
    });

    let statusInProcessSelect = document.getElementById("statusInProcessSelect");
    statusInProcessSelect.addEventListener("click", (event) => {
        filters.statusInProcessSelect = event.toElement.checked ? 1 : 0;
        projectFilter();
    });

    let statusSuccessSelect = document.getElementById("statusSuccessSelect");
    statusSuccessSelect.addEventListener("click", (event) => {
        filters.statusSuccessSelect = event.toElement.checked ? 1 : 0;
        projectFilter();
    });

    let statusNotSuccessSelect = document.getElementById("statusNotSuccessSelect");
    statusNotSuccessSelect.addEventListener("click", (event) => {
        filters.statusNotSuccessSelect = event.toElement.checked ? 1 : 0;
        projectFilter();
    });
};

const projectFilter = () => {
    // console.log(`filters: ${JSON.stringify(filters, null, 2)}`);
    // console.log(`projects: ${JSON.stringify(projects, null, 2)}`);
    const filteredProjects = projects.filter(project => {
        let isOk = true;
        switch (true) {
            case !filters.statusAllSelect && filters.statusInProcessSelect && project.inProcess != 1:
                isOk = false;
                break;
            case !filters.statusAllSelect && !filters.statusNotSuccessSelect && filters.statusSuccessSelect && project.success != 1:
                isOk = false;
                break;
            case !filters.statusAllSelect && !filters.statusSuccessSelect && filters.statusNotSuccessSelect && project.success != 0:
                isOk = false;
                break;
            case filters.categoriesSelect && !project.categories.includes(filters.categoriesSelect):
                isOk = false;
                break;
            case filters.select_area != 0 && filters.select_area != project.areaId:
                isOk = false;
                break;
            case filters.select_communities != 0 && filters.select_communities != project.communitiesId:
                isOk = false;
                break;
        }
        console.log(filters.select_communities);
        console.log(project.communitiesId);

        return isOk;
    });

    // console.log(filteredProjects);


    filteredProjects.forEach(filteredProject => document.getElementById(`projects__item__${filteredProject.id}`).style.display = 'block');
    const filteredProjectIds = filteredProjects.map(filteredProject => filteredProject.id);
    projects.forEach(project => {

        if (!filteredProjectIds.includes(project.id)) {
            document.getElementById(`projects__item__${project.id}`).style.display = 'none';
        }
    });


};