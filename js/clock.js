

// while (true) {
//     let time = new Date()
//     console.log(time.getMinutes())
// }










function count() {
    const theDate = new Date().toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"})
    const time = new Date()
    let hrs = (time.getHours());
    let min = (time.getMinutes());
    let sec = (time.getSeconds());
    if (hrs < 10) {
        hrs = '0'+hrs
    };
    if (min < 10) {
        min = '0'+min
    };
    if (sec < 10) {
        sec = '0'+sec
    };
    console.log(`${theDate}, ${hrs}:${min}:${sec}`)
}

setInterval(count, 1000)
