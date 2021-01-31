const toggleBtn = document.querySelector('.navbar_togglebutton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    // 마우스를 클릭했을 때 마우스와 메뉴의 클래스가 액티브가 없다면 액티브를 추가해주고 있다면 다시 빼주는
    menu.classList.toggle('active');
    icons.classList.toggle('active');
} );