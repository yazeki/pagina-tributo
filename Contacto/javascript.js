document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const form = document.querySelector('.form');
    const title = document.querySelector('.form__title');
    const inputs = document.querySelectorAll('.input');
    const submitButton = document.querySelector('.form__submit');

    modeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
        form.classList.toggle('dark-mode');
        title.classList.toggle('dark-mode');
        inputs.forEach(input => input.classList.toggle('dark-mode'));
        submitButton.classList.toggle('dark-mode');
    });
});
