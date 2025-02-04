const schedules = {
    Standard: [
        [8, 30, 0],
        [9, 25, 0],
        [9, 32, 0],
        [10, 31, 0],
        [10, 38, 0],
        [11, 33, 0],
        [11, 40, 0],
        [12, 35, 0],
        [13, 13, 0],
        [13, 20, 0],
        [14, 14, 0],
        [14, 21, 0],
        [15, 15, 0],
    ],
    Even_Block: [
        [8, 42, 0],
        [10, 36, 0],
        [10, 43, 0],
        [12, 37, 0],
        [13, 15, 0],
        [13, 22, 0],
        [15, 15, 0],
    ],
    Odd_Block: [
        [8, 42, 0],
        [10, 36, 0],
        [10, 43, 0],
        [12, 37, 0],
        [13, 15, 0],
        [13, 22, 0],
        [15, 15, 0],
    ],
    Assembly: [
        [8, 30, 0],
        [9, 16, 0],
        [9, 23, 0],
        [10, 13, 0],
        [10, 20, 0],
        [11, 6, 0],
        [11, 13, 0],
        [11, 59, 0],
        [12, 48, 0],
        [13, 29, 0],
        [13, 36, 0],
        [14, 22, 0],
        [14, 29, 0],
        [15, 15, 0],
    ],
    Club: [
        // [8, 30, 0],
        [21, 45, 0],
        [9, 18, 0],
        [9, 25, 0],
        [10, 16, 0],
        [10, 54, 0],
        [11, 1, 0],
        [11, 49, 0],
        [11, 56, 0],
        [12, 44, 0],
        [13, 25, 0],
        [13, 32, 0],
        [14, 20, 0],
        [15, 15, 0],
    ],
    Last_Day: [
        [8, 30, 0],
        [9, 6, 0],
        [9, 13, 0],
        [9, 48, 0],
        [9, 55, 0],
        [10, 30, 0],
        [10, 37, 0],
        [11, 12, 0],
        [11, 19, 0],
        [11, 54, 0],
        [12, 1, 0],
        [12, 35, 0],
    ]
}
    let period = 0;

function count() {
    let schedule = document.getElementById(`dailySchedule`).innerText
    const theDate = new Date().toLocaleDateString('en-us', { weekday:"short", month:"numeric", day:"numeric"})
    const time = new Date()
    let hrs = (time.getHours());
    let min = (time.getMinutes());

    // Update what it's tracking
    let target = schedules[schedule][period]


    for(n = 0; n < schedules[schedule].length; n++) {
        if(hrs > schedules[schedule][period][0]) {

            period += 1;
            if(period  > schedules[schedule].length) {
                period = 0;
            }

        }
        else if(hrs == schedules[schedule][period][0] && min < schedules[schedule][period][1]) {

        }
        else if(hrs == schedules[schedule][period][0] && min >= schedules[schedule][period][1]) {
            period += 1;
            if(period  > schedules[schedule].length) {
                period = 0;
            }

        }
    }



    hrsD = (target[0] - parseInt(hrs));
    secD = (target[2] - parseInt(time.getSeconds()));
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
    document.getElementById(`dateTime`).innerText = `${theDate}, ${hrs}:${min}`;
    
    // Make the text update
    if(period == 0) {
        document.getElementById(`until`).innerText = `Time until school starts (${targetHrs}:${targetMin}):`
    }
    else {
        document.getElementById(`until`).innerText = `Time until this period ends, at ${targetHrs}:${targetMin}:`
    }
    document.getElementById(`date`).innerText = `Date and Time:`
}

setInterval(count, 1000)
