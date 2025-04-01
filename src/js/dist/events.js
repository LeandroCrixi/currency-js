const calculating = (query, currency) => {
    const inputElement = document.querySelector(`#${query} input`);
    const resultElement = document.querySelector(`#${query} #result`);
    if (!inputElement || !resultElement) {
        console.error(`Element #${query} input not found!`);
        return;
    }
    inputElement.addEventListener('input', (event) => {
        const target = event.target;
        if (!target)
            return; // Prevent errors if the target is null
        // let value = Number(target.value) || 0; // Ensure it's a number
        const value = parseFloat(target.value) || 0; // Ensure numeric input
        // resultElement.textContent = (Number(value) * currency).toLocaleString("de-DE", { minimumFractionDigits: 2 })
        // resultElement.textContent = value
        //     ? (value * currency).toLocaleString("de-DE", { minimumFractionDigits: 2 })
        //     : "0,00"; // Fallback for empty input
        resultElement.textContent = (value * currency).toLocaleString("de-DE", {
            minimumFractionDigits: 2,
        });
    });
};
export { calculating };
