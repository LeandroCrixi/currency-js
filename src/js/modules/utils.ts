const formatCurrency = (locale: string, curr: string, value: number) => {
    const result = new Intl.NumberFormat(locale, { style: 'currency', currency: curr }).format(value)
    return result
}

const checkingCurr = (actualCurr: HTMLElement, currency: { name: string, buy: number }) => {
    if (actualCurr.id === `Real - ${currency.name}`.replace(/\s/g, "").toLowerCase()) {
        return 1 / currency.buy
    } else {
        return currency.buy
    }
}

const getCurrencyInfo = (actualCurr: HTMLElement): { locale: string, curr: string } => {
    if (actualCurr.id.endsWith('euro')) {
        return { locale: 'de-DE', curr: 'EUR' }
    } else if (actualCurr.id.endsWith('dollar')) {
        return { locale: 'en-US', curr: 'USD' }
    } else {
        return { locale: 'pt-BR', curr: 'BRL' }
    }
}

const createElement = (type: string, attributes: Record<string, string> = {}, text: string = ""): HTMLElement => {
    const el = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    if (text) el.textContent = text;
    return el;
};

export { formatCurrency, checkingCurr, getCurrencyInfo, createElement }