document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skillItem => {
        const skillPersonal = skillItem.querySelector('.skill-personal');

        skillItem.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (skillPersonal.classList.contains('show')) {
                skillPersonal.style.maxHeight = '0';
                skillPersonal.classList.remove('show');
            } else {
                skillPersonal.style.maxHeight = skillPersonal.scrollHeight + 'px';
                skillPersonal.classList.add('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(projectItem => {
        const img = projectItem.querySelector('img');

        if (img) {
            projectItem.style.display = 'grid';
        }
    });
});

// Toggle between 2 and 3 column layout
document.addEventListener('DOMContentLoaded', function() {
    const columnToggle = document.getElementById('column-toggle');
    const projectGrid = document.querySelector('.project-grid');

    columnToggle.addEventListener('change', function() {
        if (this.checked) {
            projectGrid.classList.remove('columns-2');
            projectGrid.classList.add('columns-3');
        } else {
            projectGrid.classList.remove('columns-3');
            projectGrid.classList.add('columns-2');
        }
    });
});