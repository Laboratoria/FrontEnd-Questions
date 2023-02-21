function getDate() {
    return new Promise((resolve, reject) => {
        const start = new Date(2012, 0, 1), end = new Date()
        setTimeout(() => resolve(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))))
    })
}


function minMaxDate(n) {
    const datesPromises = [];
    for (let i = 0; i < n; i++) {
        datesPromises.push(getDate())
    }

    return new Promise((resolve) => {
        Promise.all(datesPromises).then(dates => {
            console.log(dates)

            const minMax = dates.reduce((result, date) => {
                if (result.maxDate == 0 || date.getTime() > result.maxDate.getTime()) {
                    result.maxDate = date;
                    return result
                }
                if (result.minDate == 0 || date.getTime() < result.minDate.getTime()) {
                    result.minDate = date;
                }

                return result
                
            }
                , { minDate: 0, maxDate: 0 })
            resolve(minMax)
        })
    })
}

module.exports = {
    getDate,
    minMaxDate
};
