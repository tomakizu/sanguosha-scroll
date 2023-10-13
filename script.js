document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch('/data.json').then((response) => response.json());

    const container = document.querySelector('#scrollRow');
    for (const card of data) {
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
        button.addEventListener('click', () => {
            if (button.classList.contains('btn-outline-light')) {
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-light');
            } else {
                button.classList.remove('btn-light');
                button.classList.add('btn-outline-light');
            }
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