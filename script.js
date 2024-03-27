document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    skillItems.forEach(skillItem => {
        const skillPersonal = skillItem.querySelector('.skill-personal');

        if (!isTouchDevice) {
            skillItem.addEventListener('mouseenter', function(event) {
                skillPersonal.style.maxHeight = skillPersonal.scrollHeight + 'px';
                skillPersonal.classList.add('show');
            });

            skillItem.addEventListener('mouseleave', function(event) {
                skillPersonal.style.maxHeight = '0';
                skillPersonal.classList.remove('show');
            });
        }

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