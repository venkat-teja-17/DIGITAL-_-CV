// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal Functionality
    const modal = document.getElementById("projectModal");
    const closeModal = document.querySelector(".close");
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const projectId = this.getAttribute("data-project");
            loadProjectDetails(projectId);
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    function loadProjectDetails(projectId) {
        const projectDetails = {
            1: {
                title: "Title of Project 1",
                description: "Detailed description of Project 1.",
                technologies: "Technologies Used: Hardware and Software.",
                role: "Role: Your role in the project.",
                outcome: "Outcome: Achievements or results."
            },
            2: {
                title: "Title of Project 2",
                description: "Detailed description of Project 2.",
                technologies: "Technologies Used: Hardware and Software.",
                role: "Role: Your role in the project.",
                outcome: "Outcome: Achievements or results."
            },
            3: {
                title: "Title of Project 3",
                description: "Detailed description of Project 3.",
                technologies: "Technologies Used: Hardware and Software.",
                role: "Role: Your role in the project.",
                outcome: "Outcome: Achievements or results."
            }
        };

        const project = projectDetails[projectId];
        document.getElementById("projectDetails").innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.technologies}</p>
            <p>${project.role}</p>
            <p>${project.outcome}</p>
        `;
    }
});
