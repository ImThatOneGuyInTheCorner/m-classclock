const schedules = {
    standard: {
        FirstPassing: [8, 30, 0],
        First: [9, 25, 0],
        SecondPassing: [9, 32, 0],
        Second: [10, 31, 0],
        ThirdPassing: [10, 38, 0],
        Third: [11, 33, 0],
        FourthPassing: [11, 40, 0],
        Fourth: [12, 35, 0],
        Lunch: [13, 13, 0],
        SixthPassing: [13, 20, 0],
        Sixth: [14, 14, 0],
        SeventhPassing: [14, 21, 0],
        Seventh: [15, 15, 0],
    },
    evenBlock: {
        SecondPassing: [8, 42, 0],
        Second: [10, 36, 0],
        FourthPassing: [10, 43, 0],
        Fourth: [12, 37, 0],
        Lunch: [13, 15, 0],
        SixthPassing: [13, 22, 0],
        Sixth: [15, 15, 0],
    },
    oddBlock: {
        FirstPassing: [8, 42, 0],
        First: [10, 36, 0],
        ThirdPassing: [10, 43, 0],
        Third: [12, 37, 0],
        Lunch: [13, 15, 0],
        SeventhPassing: [13, 22, 0],
        Seventh: [15, 15, 0],
    }
}

function count() {
    const theDate = new Date().toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"})
    const time = new Date()
    let hrs = (time.getHours());
    let min = (time.getMinutes());
    let sec = (time.getSeconds());

    // let target = [12, 37, 0]
    // let target = [10, 45, 0]
    let target = schedules.evenBlock.Fourth

    hrsD = (target[0] - parseInt(hrs));
    minD = (target[1] - parseInt(min));
    if(minD < 0) {
        hrsD--
        minD += 60;
    }
    secD = (target[2] - parseInt(sec));
    if(secD < 0) {
        minD--
        secD += 60;
    }
    
    // Format
    if (hrs > 12) {
        hrs = hrs - 12
    };
    if (hrs < 10) {
        hrs = '0'+hrs
    };
    if (min < 10) {
        min = '0'+min
    };
    if (sec < 10) {
        sec = '0'+sec
    };
    if (hrsD < 10) {
        hrsD = '0'+hrsD
    };
    if (hrsD > 12) {
        hrsD = hrsD - 12
    };
    if (minD < 10) {
        minD = '0'+minD
    };
    if (secD < 10) {
        secD = '0'+secD
    };
    
    let targetHrs = target[0];
    if (targetHrs > 12) {
        targetHrs = targetHrs - 12
    };
    if (targetHrs < 10) {
        targetHrs = '0'+targetHrs
    }
    let targetMin = target[1];
    if (targetMin < 10) {
        targetMin = '0'+targetMin
    }
    let targetSec = target[2];
    if (targetSec < 10) {
        targetSec = '0'+targetSec
    }

    // countDown
    document.getElementById(`countDown`).innerText = `${hrsD}:${minD}:${secD} until ${targetHrs}:${targetMin}:${targetSec}`;
    // console.log(`${hrsD}:${minD}:${secD}`)

    // date
    document.getElementById(`dateTime`).innerText = `${theDate}, ${hrs}:${min}:${sec}`;
    // console.log(`${theDate}, ${hrs}:${min}:${sec}`)
}

setInterval(count, 1000)
