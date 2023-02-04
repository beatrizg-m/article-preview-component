const userInformation = document.querySelector('.user');
const share = document.querySelector('.share')
const buttonShare = document.querySelector('.button-share')


userInformation.addEventListener('click', (e) => {
    e.preventDefault();
    userInformation.classList.add('disable');
    buttonShare.classList.add('active');
    share.classList.remove('disable');
}) 

share.addEventListener('click', (e) => {
    userInformation.classList.remove('disable');
    buttonShare.classList.remove('active');
    share.classList.add('disable');
})

