const tabBarNavBtn = document.querySelectorAll('.tab-bar__nav-btn');
const tabBarItem = document.querySelectorAll('.tab-bar__item');

const onTabBarClick = (item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabBarId = currentBtn.getAttribute('data-tab');
        let currentTabContent = document.querySelector(tabBarId);

        tabBarNavBtn.forEach((item) => {
            item.classList.remove('active');
        });

        tabBarItem.forEach(item => {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTabContent.classList.add('active');
    });
};

tabBarNavBtn.forEach(onTabBarClick);
document.querySelector('.tab-bar__nav-btn').click();
