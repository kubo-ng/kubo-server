// Variable
const tag = document.querySelector('.out');
const avatar = document.querySelector('.avatar-tag');
avatar.addEventListener('click', () => {
    tag.classList.toggle('display');
});