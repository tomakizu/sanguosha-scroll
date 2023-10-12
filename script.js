// fetch('/data.json').then((response) => response.json()).then((json) => console.log(json));

const data = [
    "無中生有",
    "以逸待勞",
    "遠交近攻",
    "五谷豐登",
    "鐵索連環",
    "勠力同心",
    "過河拆橋",
    "順手牽羊",
    "借刀殺人",
    "水淹七軍",
    "南蠻入侵",
    "萬箭齊發",
    "火燒連營",
    "火攻",
    "決鬥",
    "桃園結義",
    "聯軍盛宴",
    "知己知彼",
    "敕令",
    "調虎離山",
    "挾天子以令諸候"
];

const container = document.querySelector('#mainContainer');
for (const card of data) {
    const button = document.createElement('button');
    button.textContent = card;
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-outline-light scroll-button');
    container.appendChild(button);
}

const scrollButtons = document.querySelectorAll('.scroll-button');
scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-outline-light')) {
            button.classList.remove('btn-outline-light');
            button.classList.add('btn-light');
        } else {
            button.classList.remove('btn-light');
            button.classList.add('btn-outline-light');
        }

        console.log(button.innerText);
    });
});

document.querySelector('#resetButton').addEventListener('click', () => {
    if (confirm('確定重置?')) {
        scrollButtons.forEach((button) => {
            button.classList.remove('btn-light');
            button.classList.add('btn-outline-light');
        });
    }
})