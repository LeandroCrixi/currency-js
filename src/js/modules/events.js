const calculating = (query, currency) => {
    const inputElement = document.querySelector(`#${query} input`)
    const resultElement = document.querySelector(`#${query} #result`)

    if (!inputElement) {
        console.error(`Element #${query} input not found!`);
        return;
    }

    inputElement.addEventListener('input', function (event) {
        let value = event.target.value
        // resultElement.textContent = new Intl.NumberFormat().format(value * currency)
        resultElement.textContent = (value * currency).toFixed(2).toLocaleString("de-DE")
    })
}

export { calculating }