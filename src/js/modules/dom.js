import { formatCurrency, checkingCurr, getCurrencyInfo } from "./utils.js";
import { calculating } from "./events.js";

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
    const main = document.getElementById('currencies')

    // Convert object into an array and iterate over it
    Object.values(currencies)
        .filter(currency => ['Dollar', 'Euro'].includes(currency.name))
        .forEach((currency) => {
            const currencyCard = document.createElement('div')
            currencyCard.className = 'currency-card'
            const pairs = [
                `${currency.name} - Real`,
                `Real - ${currency.name}`
            ]

            pairs.forEach(pair => {
                const elementsId = pair.replace(/\s/g, "").toLowerCase()
                const actualCurr = document.createElement('div')
                actualCurr.id = elementsId;
                currencyCard.appendChild(actualCurr)

                const title = document.createElement('h3');
                title.id = 'title'
                title.textContent = pair; // Get the currency title
                actualCurr.appendChild(title)

                const { locale, curr } = getCurrencyInfo(actualCurr)
                const value = checkingCurr(actualCurr, currency)
                const convRate = document.createElement('p')
                convRate.id = 'initial'
                convRate.textContent = `Conversion rate: ${formatCurrency(locale, curr, value)}`
                actualCurr.appendChild(convRate)

                const inputValue = document.createElement('input')
                inputValue.id = elementsId
                inputValue.setAttribute('type', 'number')
                inputValue.setAttribute('placeholder', '1.00')
                actualCurr.appendChild(inputValue)

                const result = document.createElement('p')
                result.id = 'result'
                // result.textContent = formatCurrency(locale, curr, value)
                result.textContent = (value).toFixed(2).toLocaleString("de-DE")
                actualCurr.appendChild(result)

                main.appendChild(currencyCard)

                calculating(elementsId, checkingCurr(actualCurr, currency))

            })
        });
}

export { currentDate, currentYear, processData }