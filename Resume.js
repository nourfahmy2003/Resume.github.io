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
  // Get the element corresponding to the jobId (e.g., 'job1', 'job2', etc.)
  const jobElement = document.getElementById(jobId);

  // Get the job description text
  const jobDescription = jobElement.innerHTML;

  // Set the job name and time
  const jobName = jobElement.previousElementSibling.innerText;
  const jobComp = jobElement.previousElementSibling.previousElementSibling.innerText;
  const jobTime = jobElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
  const jobDetails = `<h3>${jobName}</h3><jobcomp">${jobComp}</jobcomp><br><jobtime>${jobTime}</jobtime><p>${jobDescription}</p>`;

  // Set the job details as the content of the modal
  modalContent.innerHTML = jobDetails;

  // Show the modal
  modalOverlay.style.display = 'flex';
}
// Function to hide the modal when the close button is clicked
function hideModal() {
  modalOverlay.style.display = 'none';
}

// Get all the "Read More" buttons inside the timeline
const readMoreButtons = timeline.querySelectorAll('button.read-more-btn');

// Add click event listener to each button
readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the value of the 'data-job-id' attribute from the button
    const jobId = button.getAttribute('data-job-id');

    // Call the showModal function and pass the jobId
    showModal(jobId);
  });
});

// Add click event listener to close button
closeBtn.addEventListener('click', () => {
  // Call the hideModal function when close button is clicked
  hideModal();
});

// Close the modal if the user clicks outside the modal content
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    // Call the hideModal function when the modal overlay is clicked
    hideModal();
  }
});

// Hide the modal when the page loads
window.onload = function() {
  hideModal();
};



