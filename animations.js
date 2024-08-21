// Adding Slide-In Animation on Scroll for Specific Sections
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.home-content, .about, .skills, .projects, .education, .certifications, .contact');
    let windowHeight = window.innerHeight;

    sections.forEach(function (section) {
        let sectionPosition = section.getBoundingClientRect().top;
        if (sectionPosition < windowHeight - 50) {
            section.style.animationPlayState = 'running';
        }
    });
});
