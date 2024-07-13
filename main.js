document.addEventListener('DOMContentLoaded', function () {
    
    const icon = document.querySelector('.share_icon');
    const popUp = document.querySelector('.share_box');

    const onShow = () => {
        popUp.style.display = 'flex';
        popUp.classList.add('fade-in-up');
        popUp.classList.remove('fade-out-down');
    };

    const onHide = () => {
        popUp.classList.add('fade-out-down');
        popUp.classList.remove('fade-in-up');
        setTimeout(() => {popUp.style.display = 'none';}, 300);
    };

    icon.onmouseover = onShow;
    
    icon.onmouseleave = () => {
        setTimeout(() => !popUp.matches(':hover') && onHide(), 300);
    };

    popUp.onmouseleave = onHide;
});
