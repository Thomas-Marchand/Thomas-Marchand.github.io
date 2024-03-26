// Smooth scrolling
// $(document).ready(() => {
//     $('a').on('click', function(event){
//         if (this.hash !== "") {
//             event.preventDefault();
//             const hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, () => { // 800ms scrolling duration
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// window.addEventListener('scroll', () => {
//     const header = document.getElementById('header');
//     const nav = document.getElementById('nav');
//     const headerHeight = header.offsetHeight;
//     const navHeight = nav.offsetHeight;

//     if (window.pageYOffset > headerHeight) {
//         nav.style.position = 'fixed';
//         nav.style.top = '0';
//         document.body.style.paddingTop = navHeight + 'px'; // Add space to avoid content being hidden by the fixed nav
//     } else {
//         nav.style.position = 'relative';
//         nav.style.top = '';
//         document.body.style.paddingTop = '0'; // Remove the padding when the nav is not fixed
//     }
// });