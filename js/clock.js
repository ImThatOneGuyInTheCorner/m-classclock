const schedules = {
    Standard: {
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
    Even_Block: {
        SecondPassing: [8, 42, 0],
        Second: [10, 36, 0],
        FourthPassing: [10, 43, 0],
        Fourth: [12, 37, 0],
        Lunch: [13, 15, 0],
        SixthPassing: [13, 22, 0],
        Sixth: [15, 15, 0],
    },
    Odd_Block: {
        FirstPassing: [8, 42, 0],
        First: [10, 36, 0],
        ThirdPassing: [10, 43, 0],
        Third: [12, 37, 0],
        Lunch: [13, 15, 0],
        SeventhPassing: [13, 22, 0],
        Seventh: [15, 15, 0],
    },
    Assembly: {
        FirstPassing: [8, 30, 0],
        First: [9, 16, 0],
        SecondPassing: [9, 23, 0],
        Second: [10, 13, 0],
        ThirdPassing: [10, 20, 0],
        Third: [11, 6, 0],
        FourthPassing: [11, 13, 0],
        Fourth: [11, 59, 0],
        Assembly: [12, 48, 0],
        Lunch: [13, 29, 0],
        SixthPassing: [13, 36, 0],
        Sixth: [14, 22, 0],
        SeventhPassing: [14, 29, 0],
        Seventh: [15, 15, 0],
    },
    Club: {
        FirstPassing: [8, 30, 0],
        First: [9, 18, 0],
        SecondPassing: [9, 25, 0],
        Second: [10, 16, 0],
        Club: [10, 54, 0],
        ThirdPassing: [11, 1, 0],
        Third: [11, 49, 0],
        FourthPassing: [11, 56, 0],
        Fourth: [12, 44, 0],
        Lunch: [13, 25, 0],
        SixthPassing: [13, 32, 0],
        Sixth: [14, 20, 0],
        SeventhPassing: [14, 27, 0],
        Seventh: [15, 15, 0],
    },
    Last_Day: {
        FirstPassing: [8, 30, 0],
        First: [9, 6, 0],
        SecondPassing: [9, 13, 0],
        Second: [9, 48, 0],
        ThirdPassing: [9, 55, 0],
        Third: [10, 30, 0],
        FourthPassing: [10, 37, 0],
        Fourth: [11, 12, 0],
        SixthPassing: [11, 19, 0],
        Sixth: [11, 54, 0],
        SeventhPassing: [12, 1, 0],
        Seventh: [12, 35, 0],
    }
}


function count() {
    let schedule = document.getElementById(`dailySchedule`).innerText
    const theDate = new Date().toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"})
    const time = new Date()
    let hrs = (time.getHours());
    let min = (time.getMinutes());
    let sec = (time.getSeconds());

    // Update what it's tracking
    let target = schedules[schedule].Lunch

    hrsD = (target[0] - parseInt(hrs));
    secD = (target[2] - parseInt(sec));
    minD = (target[1] - parseInt(min));
    if(secD < 0) {
        minD--
        secD += 60;
    }
    if(minD < 0) {
        hrsD--
        minD += 60;
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
    document.getElementById(`countDown`).innerText = `${hrsD}:${minD}:${secD}`;
    document.getElementById(`dateTime`).innerText = `${theDate}, ${hrs}:${min}:${sec}`;
    
    // Make the text update
    document.getElementById(`until`).innerText = `Time until lunch ends (${targetHrs}:${targetMin}:${targetSec}):`
    document.getElementById(`date`).innerText = `Date and Time:`
}

setInterval(count, 1000)
