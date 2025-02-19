const address_group = document.querySelector('.address_group'); 
const inforUser = document.querySelector('.infor_user'); 
const infor_group = document.querySelector('.infor_group')
const infor_group2 = document.querySelector('.infor_group2')
const inforUser2 = document.querySelector('.infor_user2');

address_group.addEventListener('click', () => {
    inforUser.classList.add('none');
    inforUser2.classList.remove('none');
});

infor_group2.addEventListener('click', () => {
    inforUser2.classList.add('none');
    inforUser.classList.remove('none');
});

document.addEventListener('DOMContentLoaded', function () {
const popup = document.getElementById('popup');
const showPopupBtn = document.getElementById('show-popup-btn');
const closeBtn = document.getElementById('close-btn');
const confirmBtn = document.getElementById('confirm-btn');

showPopupBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

confirmBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Đóng popup khi nhấn bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === popup) {
    popup.classList.add('hidden');
    }
    });
});

document.addEventListener('DOMContentLoaded', function () {
const popup2 = document.getElementById('popup2');
const showPopupBtn = document.getElementById('update');
const closeBtn2 = document.getElementById('close-btn2');
const confirmBtn = document.getElementById('confirm-btn2');

showPopupBtn.addEventListener('click', () => {
    popup2.classList.remove('hidden');
});

closeBtn2.addEventListener('click', () => {
    popup2.classList.add('hidden');
});

confirmBtn.addEventListener('click', () => {
    popup2.classList.add('hidden');
});

// Đóng popup khi nhấn bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === popup2) {
    popup2.classList.add('hidden');
    }
    });
});  

document.addEventListener('DOMContentLoaded', function () {
const popup3 = document.getElementById('popup3');
const showPopupBtn = document.getElementById('update2');
const closeBtn3 = document.getElementById('close-btn3');
const confirmBtn = document.getElementById('confirm-btn3');

showPopupBtn.addEventListener('click', () => {
    popup3.classList.remove('hidden');
});

closeBtn3.addEventListener('click', () => {
    popup3.classList.add('hidden');
});

confirmBtn.addEventListener('click', () => {
    popup3.classList.add('hidden');
});

// Đóng popup khi nhấn bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === popup3) {
    popup3.classList.add('hidden');
    }
    });
});  

document.addEventListener('DOMContentLoaded', function () {
const popup4 = document.getElementById('popup4');
const showPopupBtn = document.getElementById('update3');
const closeBtn4 = document.getElementById('close-btn4');
const confirmBtn = document.getElementById('confirm-btn4');

showPopupBtn.addEventListener('click', () => {
    popup4.classList.remove('hidden');
});

closeBtn4.addEventListener('click', () => {
    popup4.classList.add('hidden');
});

confirmBtn.addEventListener('click', () => {
    popup4.classList.add('hidden');
});

// Đóng popup khi nhấn bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === popup4) {
    popup4.classList.add('hidden');
    }
    });
});  