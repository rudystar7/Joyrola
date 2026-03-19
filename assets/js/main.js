document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('#quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      alert(`Thank you${name ? ', ' + name : ''}! Your request has been prepared. Please also call (321) 316-3787 or email info@joyrolalogistics.com for faster service.`);
      form.reset();
    });
  }
});
