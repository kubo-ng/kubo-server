// Variales
const form = document.querySelector('.land-form');

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