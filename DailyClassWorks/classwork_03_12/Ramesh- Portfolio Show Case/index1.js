const projects = [
    { id: 1, title: 'Website Redesign', category: 'web', description: 'A complete redesign of an e-commerce website.' },
    { id: 2, title: 'Mobile App', category: 'app', description: 'An Android app for fitness tracking.' },
    { id: 3, title: 'UI/UX Design', category: 'design', description: 'UI/UX design for a startup’s landing page.' },
    { id: 4, title: 'Portfolio Website', category: 'web', description: 'A personal portfolio website using HTML, CSS, and JavaScript.' },
    { id: 5, title: 'Social Media App', category: 'app', description: 'A social media app for sharing photos and posts.' },
    { id: 6, title: 'Logo Design', category: 'design', description: 'Logo design for a tech company.' },
    { id: 7, title: 'E-commerce Platform', category: 'web', description: 'Building a fully functional e-commerce platform.' },
    { id: 8, title: 'Fitness Tracker App', category: 'app', description: 'A fitness tracker app for iOS.' },
];

function renderProjects(filter = 'all') {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';

    const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter)
    const projectElements = filteredProjects.map(project => {
        return `
            <div class="project">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <span class="category">${project.category}</span>
            </div>
        `;
    });
    projectsContainer.innerHTML = projectElements.reduce((acc, projectHTML) => acc + projectHTML, '');
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});
renderProjects();







































































// const projects = [
//     { id: 1, title: 'Website Redesign', category: 'web', description: 'A complete redesign of an e-commerce website.' },
//     { id: 2, title: 'Mobile App', category: 'app', description: 'An Android app for fitness tracking.' },
//     { id: 3, title: 'UI/UX Design', category: 'design', description: 'UI/UX design for a startup’s landing page.' },
//     { id: 4, title: 'Portfolio Website', category: 'web', description: 'A personal portfolio website using HTML, CSS, and JavaScript.' },
//     { id: 5, title: 'Social Media App', category: 'app', description: 'A social media app for sharing photos and posts.' },
//     { id: 6, title: 'Logo Design', category: 'design', description: 'Logo design for a tech company.' },
//     { id: 7, title: 'E-commerce Platform', category: 'web', description: 'Building a fully functional e-commerce platform.' },
//     { id: 8, title: 'Fitness Tracker App', category: 'app', description: 'A fitness tracker app for iOS.' },
// ];

// function renProjects(filter = 'all') {
//     const projectsContainer = document.querySelector('.projects-container');
//     projectsContainer.innerHTML = '';

    
//     const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);


//     filteredProjects.forEach(project => {
//         const projectElement = document.createElement('div');
//         projectElement.classList.add('project');
//         projectElement.innerHTML = `
//             <h2>${project.title}</h2>
//             <p>${project.description}</p>
//             <span class="category">${project.category}</span>
//         `;
//         projectsContainer.appendChild(projectElement);
//     });
// }

// const filterButtons = document.querySelectorAll('.filter-btn');
// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const filter = button.getAttribute('data-filter');
//         renderProjects(filter);
//     });
// });


// renProjects();
