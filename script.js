document.querySelector('a[href="#skills"]').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#skills').scrollIntoView({
    behavior: 'smooth'
  });
});
