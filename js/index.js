const body = document.body;

// Function to toggle the menu
function toggleMenu() {
  const menu = document.getElementById('navbarNav');
  menu.classList.toggle('show'); // Toggle the 'show' class
}

// Function to close the menu
function closeMenu() {
  const menu = document.getElementById('navbarNav');
  menu.classList.remove('show'); // Close the menu by removing the 'show' class
}

// Function to toggle dark mode
function toggleDarkMode() {
  const icon = document.getElementById('theme-icon');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save the current mode to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    localStorage.setItem('theme', 'light');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// Apply the saved theme when the page loads
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('theme-icon');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// Apply the saved theme when the page loads
applySavedTheme();

// Flip card functionality
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const cardInner = e.target.closest('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
});

// Function to redirect to the French page
function redirectToFrenchPage() {
  window.location.href = 'indexFr.html';
}

// Function to redirect to the English page
function redirectToEnglishPage() {
  window.location.href = 'index.html';
}

// Zoom functionality
function openModal(imageSrc) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}





const goUpBtn = document.getElementById("goUpBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    goUpBtn.classList.add("show");
  } else {
    goUpBtn.classList.remove("show");
  }
});

goUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});