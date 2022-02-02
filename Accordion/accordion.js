let accordions;
const accordinWrapper = document.querySelector('.accordion__wrapper');

const mockData = [
    {
        id: 1,
        title: 'title 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi dignissimos distinctio eum maiores modi perferendis placeat quam velit! Blanditiis deserunt eius error eveniet illo porro rem vel voluptatem.'
    },{
        id: 2,
        title: 'title 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi dignissimos distinctio eum maiores modi perferendis placeat quam velit! Blanditiis deserunt eius error eveniet illo porro rem vel voluptatem.'
    },{
        id: 3,
        title: 'title 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi dignissimos distinctio eum maiores modi perferendis placeat quam velit! Blanditiis deserunt eius error eveniet illo porro rem vel voluptatem.'
    },{
        id: 4,
        title: 'title 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi dignissimos distinctio eum maiores modi perferendis placeat quam velit! Blanditiis deserunt eius error eveniet illo porro rem vel voluptatem.'
    },
];

const createTemplateAccordion = (item) => {
    return `
        <div class="accordion__item">
            <div class="accordion__item--title">${item.title}</div>
             <div class="accordion__item--content">
                <div class="accordion__item--content-padding">${item.content}</div>
             </div>
        </div>
    `;
};

const fillHtmlList = () => {
    mockData.forEach(item => {
        accordinWrapper.innerHTML += createTemplateAccordion(item);
    });
    accordions = document.querySelectorAll('.accordion__item');
};

fillHtmlList();

const openAccordion= () => {
    for (let item of accordions) {
        item.addEventListener('click', function () {
            // this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for (let el of accordions) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    }
};

openAccordion();
