let instagram = document.querySelector('#insta')
let whatsApp = document.querySelector('#wtsApp')
let facebook = document.querySelector('#faceBk')

function instaOpen() {
    window.open("https://www.instagram.com/niltons.personal/", "_blank")
}
function whatsOpen() {
    window.open("https://wa.me/+5519994498274?text=Ol%C3%A1,%20Nilton!%20Gostaria%20de%20saber%20mais%20sobre%20o%20projeto%20A.N!", "_blank")
}
function faceOpen() {
    window.open("https://www.facebook.com/nilton.silva.104203", "_blank")
}

instagram.addEventListener('click', instaOpen);
whatsApp.addEventListener('click', whatsOpen);
facebook.addEventListener('click', faceOpen);