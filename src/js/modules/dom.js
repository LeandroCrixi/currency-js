const currentDate = () => {
    const today = new Date()
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(today);
    const h2Date = document.getElementById('currDate')
    h2Date.textContent += formattedDate
}

const currentYear = () => {
    const year = new Date().getFullYear();
    const current_year = document.getElementById('current-year')
    current_year.textContent = year
}

const processData = (currencies) => {
    const main = document.getElementById('main')
    const card = document.createElement('div')

    // Convert object into an array and iterate over it
    Object.values(currencies).forEach((currency) => {
        const name = document.createElement('p');
        name.textContent = currency.name; // Get the currency name
        card.appendChild(name);
    });

    main.appendChild(card)
}

export { currentDate, currentYear, processData }