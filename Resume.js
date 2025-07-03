// Add smooth scrolling to navigate to sections
document.getElementById('scroll-down').addEventListener('click', function() {
  const target = document.getElementById('about');
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Reveal the clean strip for "About Me" section on scroll
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      aboutSection.classList.add('scrolled');
    }
  }
});

const timeline = document.querySelector('.timeline');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');

// Function to show the modal when a "Read More" button is clicked
function showModal(jobId) {
  // Get the element corresponding to the jobId (e.g., 'job1', 'job2', 'project1', etc.)
  const jobElement = document.getElementById(jobId);

  if (!jobElement) {
    console.error(`Element with ID '${jobId}' not found`);
    return;
  }

  // Get the job description text
  const jobDescription = jobElement.innerHTML;

  // Determine if this is a project or work experience
  const isProject = jobId.startsWith('project');
  
  let jobDetails = '';
  
  if (isProject) {
    // For projects, get details from the project card
    const projectCard = document.querySelector(`[data-project="${jobId}"]`);
    if (projectCard) {
      const projectTitle = projectCard.querySelector('h3').innerText;
      const projectDate = projectCard.querySelector('.project-date').innerText;
      const projectLocation = projectCard.querySelector('.project-location').innerText;
      
      jobDetails = `<h3>${projectTitle}</h3><jobcomp>Project</jobcomp><br><jobtime>${projectDate}</jobtime><br><joblocation>${projectLocation}</joblocation><p>${jobDescription}</p>`;
    } else {
      // Fallback for project details
      jobDetails = `<h3>Project Details</h3><p>${jobDescription}</p>`;
    }
  } else {
    // For work experience, use the existing structure
    const jobName = jobElement.previousElementSibling.innerText;
    const jobComp = jobElement.previousElementSibling.previousElementSibling.innerText;
    const jobTime = jobElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    
    // Special handling for Storelx job (job1) to include website link
    if (jobId === 'job1') {
      jobDetails = `<h3>${jobName}</h3><jobcomp>${jobComp}</jobcomp><br><jobtime>${jobTime}</jobtime><br><div class="company-website-link"><a href="https://www.storelx.com" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 5px; margin: 10px 0;"><span>🌐</span> Visit Storelx Website: www.storelx.com</a></div><p>${jobDescription}</p>`;
    } else {
      jobDetails = `<h3>${jobName}</h3><jobcomp>${jobComp}</jobcomp><br><jobtime>${jobTime}</jobtime><p>${jobDescription}</p>`;
    }
  }

  // Set the job details as the content of the modal
  modalContent.innerHTML = jobDetails;

  // Show the modal
  modalOverlay.style.display = 'flex';
}

// Function to hide the modal when the close button is clicked
function hideModal() {
  modalOverlay.style.display = 'none';
}

// Get all the "Read More" buttons from both timeline sections
const experienceTimeline = document.querySelector('.experience-section .timeline');
const projectsTimeline = document.querySelector('.projects-section .timeline');

// Function to add event listeners to read more buttons in a timeline
function addReadMoreListeners(timelineElement) {
  if (timelineElement) {
    const readMoreButtons = timelineElement.querySelectorAll('button.read-more-btn');
    
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Get the value of the 'data-job-id' attribute from the button
        const jobId = button.getAttribute('data-job-id');
        
        // Call the showModal function and pass the jobId
        showModal(jobId);
      });
    });
  }
}

// Add event listeners to both experience and projects timelines
addReadMoreListeners(experienceTimeline);
addReadMoreListeners(projectsTimeline);

// Function to add event listeners to project detail buttons
function addProjectDetailListeners() {
  const projectDetailButtons = document.querySelectorAll('.project-details-btn');
  
  projectDetailButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get the value of the 'data-project-id' attribute from the button
      const projectId = button.getAttribute('data-project-id');
      
      // Call the showModal function and pass the projectId
      showModal(projectId);
    });
  });
}

// Function to add event listeners to read more buttons in work experience timeline
function addWorkExperienceListeners() {
  const experienceTimeline = document.querySelector('.experience-section .timeline');
  if (experienceTimeline) {
    const readMoreButtons = experienceTimeline.querySelectorAll('button.read-more-btn');
    
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Get the value of the 'data-job-id' attribute from the button
        const jobId = button.getAttribute('data-job-id');
        
        // Call the showModal function and pass the jobId
        showModal(jobId);
      });
    });
  }
}

// Add event listeners to both sections
addWorkExperienceListeners();
addProjectDetailListeners();

// Add click event listener to close button
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    // Call the hideModal function when close button is clicked
    hideModal();
  });
}

// Close the modal if the user clicks outside the modal content
if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      // Call the hideModal function when the modal overlay is clicked
      hideModal();
    }
  });
}

// Hide the modal when the page loads
window.onload = function() {
  hideModal();
  animateSkillBars();
};

// Function to animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const width = skillBar.getAttribute('data-width');
        skillBar.style.setProperty('--width', width);
        skillBar.style.width = width;
        
        // Add a slight delay for staggered animation
        setTimeout(() => {
          skillBar.style.opacity = '1';
        }, Math.random() * 500);
      }
    });
  }, {
    threshold: 0.5
  });
  
  skillBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.opacity = '0.8';
    observer.observe(bar);
  });
}

// Add scroll animations for skill cards
function addSkillCardAnimations() {
  const skillCards = document.querySelectorAll('.soft-skill-card, .skill-category');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.2
  });
  
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addSkillCardAnimations();
});



