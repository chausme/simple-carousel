const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: './images/person-1.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic aut maiores repellendus omnis praesentium officiis! Autem deleniti tenetur eum.',
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web Designer',
        img: './images/person-2.jpg',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus!',
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        img: './images/person-3.jpg',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta aperiam reiciendis iure magni harum?',
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'The Boss',
        img: './images/person-4.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores, temporibus cumque enim dignissimos quisquam amet sint quidem deserunt voluptates ipsam voluptate nobis incidunt natus atque iste architecto sed eaque, suscipit veritatis laborum.',
    },
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

// show person based on item

const showPerson = index => {
    const item = reviews[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
};

// show next person

nextBtn.addEventListener('click', () => {
    currentItem += 1;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener('click', () => {
    currentItem -= 1;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person

randomBtn.addEventListener('click', () => {
    let randomIndex = getRandomIndex();
    while (currentItem === randomIndex) {
        randomIndex = getRandomIndex();
    }
    currentItem = randomIndex;
    showPerson(randomIndex);
});

// get random review index

const getRandomIndex = () => Math.floor(Math.random() * reviews.length);
