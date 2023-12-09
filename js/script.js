function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-secondary');
      navbar.classList.add('navbar-custom');
    } else {
      navbar.classList.remove('bg-secondary');
      navbar.classList.remove('navbar-custom');
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll());