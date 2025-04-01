import { formatCurrency, checkingCurr, getCurrencyInfo, createElement } from "./utils.js";
import { calculating } from "./events.js";
const currentDate = () => {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(today);
    const h2Date = document.getElementById('currDate');
    if (!h2Date)
        return;
    h2Date.textContent += formattedDate;
};
const currentYear = () => {
    const year = new Date().getFullYear();
    const current_year = document.getElementById('current-year');
    if (!current_year)
        return;
    current_year.textContent = year.toString();
};
const processData = (currencies) => {
    const main = document.getElementById('currencies');
    if (!main)
        return;
    // Convert object into an array and iterate over it
    Object.values(currencies)
        .filter(currency => ['Dollar', 'Euro'].includes(currency.name))
        .forEach((currency) => {
        // const currencyCard = document.createElement('div')
        // currencyCard.className = 'currency-card'
        const currencyCard = createElement("div", { class: "currency-card" });
        const pairs = [
            `${currency.name} - Real`,
            `Real - ${currency.name}`
        ];
        pairs.forEach(pair => {
            const elementsId = pair.replace(/\s/g, "").toLowerCase();
            // const actualCurr = document.createElement('div')
            // actualCurr.id = elementsId;
            const actualCurr = createElement("div", { id: elementsId });
            currencyCard.appendChild(actualCurr);
            // const title = document.createElement('h3');
            // title.id = 'title'
            // title.textContent = pair; // Get the currency title
            const title = createElement("h3", { id: "title" }, pair);
            actualCurr.appendChild(title);
            const { locale, curr } = getCurrencyInfo(actualCurr);
            const value = checkingCurr(actualCurr, currency);
            // const convRate = document.createElement('p')
            const convRate = createElement("p", { id: "initial" }, `Conversion rate: ${formatCurrency(locale, curr, value)}`);
            // convRate.id = 'initial'
            // convRate.textContent = `Conversion rate: ${formatCurrency(locale, curr, value)}`
            actualCurr.appendChild(convRate);
            // const inputValue = document.createElement('input')
            const inputValue = createElement("input", {
                id: elementsId,
                type: "number",
                placeholder: "1.00"
            });
            // inputValue.id = elementsId
            // inputValue.setAttribute('type', 'number')
            // inputValue.setAttribute('placeholder', '1.00')
            actualCurr.appendChild(inputValue);
            // const result = document.createElement('p')
            const result = createElement("p", { id: "result" }, 
            // (value).toFixed(2).toLocaleString("de-DE")
            (value).toFixed(2).toLocaleString());
            // result.id = 'result'
            // result.textContent = (value).toFixed(2).toLocaleString("de-DE")
            actualCurr.appendChild(result);
            main.appendChild(currencyCard);
            // Ensure calculating runs after elements exist
            setTimeout(() => calculating(elementsId, checkingCurr(actualCurr, currency)), 0);
        });
    });
};
export { currentDate, currentYear, processData };
