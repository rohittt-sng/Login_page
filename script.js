const container = document.querySelector('.container');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

registerlink.onclick = () => {
    container.classList.add('active');
}

loginlink.onclick = () => {
    container.classList.remove('active');
}