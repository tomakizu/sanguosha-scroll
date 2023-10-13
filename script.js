document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch('./data.json').then((response) => response.json());
    let cardOnHold = '';

    const container = document.querySelector('#scrollRow');
    for (const card in data) {
        const div = document.createElement('div');
        div.setAttribute('class', 'col-6 d-grid mb-3');

        const button = document.createElement('button');
        button.textContent = card;
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'ml-4 mr-4 pt-3 pb-3 btn btn-outline-light scroll-button');

        div.appendChild(button);
        container.appendChild(div);
    }

    const scrollButtons = document.querySelectorAll('.scroll-button');
    scrollButtons.forEach((button) => {
        let timer;
        button.addEventListener('click', () => {
            console.log(button.textContent + ' clicked');
            if (button.classList.contains('btn-outline-light') && cardOnHold != button.textContent) {
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-light');
            } else if (button.classList.contains('btn-light') && cardOnHold != button.textContent) {
                button.classList.remove('btn-light');
                button.classList.add('btn-outline-light');
            }
            cardOnHold = '';
        });
        button.addEventListener('touchstart', () => {
            timer = setTimeout(() => {
                cardOnHold = button.textContent;
                alert('【' + button.textContent + '】' + '\n' + data[button.textContent]);
            }, 500);
        });
        button.addEventListener('touchend', () => {
            clearTimeout(timer);
        });
        button.addEventListener('touchcancel', () => {
            clearTimeout(timer);
            cardOnHold = '';
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
});