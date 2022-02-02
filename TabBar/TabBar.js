const tabBarNavBtn = document.querySelectorAll('.tab-bar__nav-btn');
const tabBarItem = document.querySelectorAll('.tab-bar__item');

tabBarNavBtn.forEach(onTabBarClick);

function onTabBarClick(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabBarId = currentBtn.getAttribute('data-tab');
        let currentTabContent = document.querySelector(tabBarId);

        if(!currentBtn.classList.contains('active')) {
            tabBarNavBtn.forEach((item) => {
                item.classList.remove('active');
            });

            tabBarItem.forEach(item => {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTabContent.classList.add('active');
        }
    });
}

document.querySelector('.tab-bar__nav-btn').click();