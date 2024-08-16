document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll
    document.querySelector('nav').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Modal Functionality
    const modal = document.getElementById("projectModal");
    const closeModal = document.querySelector(".close");

    // Event delegation for project links
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('.project-link')) {
            e.preventDefault();
            const projectId = e.target.getAttribute("data-project");
            loadProjectDetails(projectId);
            modal.style.display = "block";
        }

        // Closing the modal when clicking on the close button or outside the modal
        if (e.target === closeModal || e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to load project details into the modal
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
        
        if (!project) {
            document.getElementById("projectDetails").innerHTML = "<p>Project details not found.</p>";
            return;
        }

        document.getElementById("projectDetails").innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.technologies}</p>
            <p>${project.role}</p>
            <p>${project.outcome}</p>
        `;
    }

    // Click outside modal to close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
