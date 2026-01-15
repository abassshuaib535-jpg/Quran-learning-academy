function showSection(id) {
  const sections = ['home-section', 'register-section', 'login-section'];
  sections.forEach(sec => {
    document.getElementById(sec).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

