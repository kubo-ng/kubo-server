// Variales
const form = document.querySelector('.signup-form');
const eye = document.querySelector('.eye');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementsByTagName('input');
    input.value = '';
    for (let i = 0; i < input.length; ++i) {
        if (input[i].value == '') {
            input[i].style.border = 'solid 1px red';
            setTimeout(() => {
                input[i].style.border = 'solid 1px #ddd';
            }, 3000);
        } else {
            input[i].style.border = 'solid 1px #ddd';
        }
    }
});

eye.addEventListener('click', () => {
    const password = document.querySelector('#password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});