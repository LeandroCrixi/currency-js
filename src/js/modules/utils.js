const formatCurrency = (locale, curr, value) => {
    const result = new Intl.NumberFormat(locale, { style: 'currency', currency: curr }).format(value)
    return result
}

const checkingCurr = (actualCurr, currency) => {
    if (actualCurr.id === `Real - ${currency.name}`.replace(/\s/g, "").toLowerCase()) {
        return 1 / currency.buy
    } else {
        return currency.buy
    }
}

const getCurrencyInfo = (actualCurr) => {
    if (actualCurr.id.endsWith('euro')) {
        return { locale: 'de-DE', curr: 'EUR' }
    } else if (actualCurr.id.endsWith('dollar')) {
        return { locale: 'en-US', curr: 'USD' }
    } else {
        return { locale: 'pt-BR', curr: 'BRL' }
    }
}

export { formatCurrency, checkingCurr, getCurrencyInfo }