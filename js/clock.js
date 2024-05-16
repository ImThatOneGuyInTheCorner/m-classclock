

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

    // let target = [12, 36, 60]
    let target = [10, 45, 60]
    hrs = (target[0] - parseInt(hrs));
    min = (target[1] - parseInt(min));
    if(min < 0) {
        hrs--
        min += 60;
    }
    sec = (target[2] - parseInt(sec));
    // console.log(`${theDate}, ${hrs}:${min}:${sec}`)
    console.log(`${hrs}:${min}:${sec}`)
}

setInterval(count, 1000)
