//Для примера

const callPolice = () => {
    console.log(('Call 02'))
}

const alarm = (thieves, callback) => {
    console.log(thieves)
    if (thieves < 10 ) {
        return;
    }
    callback(thieves)
}

for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        alarm(i, callPolice)
    }, 100 * i)
}recursion