
document.querySelector('.lock_ground').addEventListener('click', function(){
    document.querySelector('.line1').classList.remove('active')
    document.querySelector('.line2').classList.remove('active')
    document.querySelector('.line3').classList.remove('active')
    document.querySelector('.lock_ground').classList.remove('active')
    document.querySelector('.side-bar').classList.remove('active')
})

document.getElementById('side_btn').addEventListener('click', function(){
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
    document.querySelector('.lock_ground').classList.toggle('active')
    document.querySelector('.side-bar').classList.toggle('active')
})

document.querySelector('.youtube--icon').addEventListener('click', () => window.location.href ='https://www.youtube.com')
document.querySelector('.tiktok--icon').addEventListener('click', () => window.location.href ='https://www.tiktok.com')
document.querySelector('.instagram--icon').addEventListener('click', () => window.location.href ='https://www.instagram.com')
document.querySelector('.whatsaap--icon').addEventListener('click', () => window.location.href ='https://www.whatsaap.com')

document.getElementById('side_btn2').addEventListener('click', () => window.location.href = 'https://www.saweria.co/Farelalfareza')
document.getElementById('side_btn5').addEventListener('click', () => window.location.href = 'mailto:Zyyxzdeveloper@gmail.com')
document.getElementById('side_btn4').addEventListener('click', () => window.location.href = 'https://getcody.ai/conversations/2141894')
document.getElementById('side_btn3').addEventListener('click', () => window.location.href = 'https://www.instagram.com/farel.developer/?utm_source=qr&r=nametag')

const back_button = document.getElementById('back_crdt')
const open_credit = document.getElementById('side_btn1')


open_credit.addEventListener('click', function(){
    document.querySelector('.ground_credit-page').style.transform = 'scale(100%)'
    document.querySelector('.ground_credit-page').style.opacity = '100%'
    document.querySelector('.line1').classList.remove('active')
    document.querySelector('.line2').classList.remove('active')
    document.querySelector('.line3').classList.remove('active')
    document.querySelector('.lock_ground').classList.remove('active')
    document.querySelector('.side-bar').classList.remove('active')
})
back_button.addEventListener('click', function(){
    document.querySelector('.ground_credit-page').style.transform = 'scale(0%)'
    document.querySelector('.ground_credit-page').style.opacity = '0%'
})

function acc_nnews(){
    document.querySelector('.new').classList.toggle('active')
}