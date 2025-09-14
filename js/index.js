const body = document.body;

// Fonction pour basculer le menu
function toggleMenu() {
  const menu = document.getElementById('navbarNav');
  menu.classList.toggle('show'); // Toggle to show/hide the menu
}

// Fonction pour fermer le menu
function closeMenu() {
  const menu = document.getElementById('navbarNav');
  menu.classList.remove('show'); // Remove show class to hide the menu
}

// Add event listener to close the menu when clicking on any link
const menuLinks = document.querySelectorAll('.menu a'); // Select all the links in the menu
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu); // Close menu when a link is clicked
});


// Fonction pour basculer le mode sombre/clair
function toggleDarkMode() {
  const icon = document.getElementById('theme-icon');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Sauvegarder le mode actuel dans localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    localStorage.setItem('theme', 'light');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// Appliquer le thème enregistré ou définir Dark Mode par défaut
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Dark mode par défaut
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

// Appliquer le thème au chargement de la page
applySavedTheme();

// Fonctionnalité de flip card
document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const cardInner = e.target.closest('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
});

// Fonction pour changer de langue en conservant le mode
function redirectToFrenchPage() {
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  window.location.href = 'indexFr.html';
}

function redirectToEnglishPage() {
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  window.location.href = 'index.html';
}

// Zoom d'image
function openModal(imageSrc) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Bouton retour en haut
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