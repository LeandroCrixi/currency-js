const getData = async (url, callback) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`)
        }
        const data = await res.json()
        console.log(data.results.currencies)
        callback(data.results.currencies)
    } catch (error) {
        console.error(error);
    }
}

export { getData }