document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skillItem => {
        const skillPersonal = skillItem.querySelector('.skill-personal');

        skillItem.addEventListener('mouseenter', function(event) {
            skillPersonal.style.maxHeight = skillPersonal.scrollHeight + 'px';
            skillPersonal.classList.add('show');
        });

        skillItem.addEventListener('mouseleave', function(event) {
            skillPersonal.style.maxHeight = '0';
            skillPersonal.classList.remove('show');
        });

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