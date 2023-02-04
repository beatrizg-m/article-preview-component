const userInformation = document.querySelector('.user');
const share = document.querySelector('.share')
const buttonShare = document.querySelectorAll('.button-share')
console.log(share);

userInformation.addEventListener('click', (e) => {
    e.preventDefault();
    userInformation.classList.add('disable');
    share.classList.remove('disable');
}) 

share.addEventListener('click', (e) => {
    userInformation.classList.remove('disable');
    share.classList.add('disable');
})

