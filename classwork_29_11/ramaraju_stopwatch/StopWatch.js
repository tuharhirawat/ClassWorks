let H = 0, Min = 0, Sec = 0, Ms = 0;
let tl = null;
let Running = false;

document.getElementById("start").addEventListener("click", () => {
    if (!Running) {
        Running = true;
        tl = setInterval(() => {
            Ms += 10;
            if (Ms === 1000) {
                Ms = 0;
                Sec++;
            }
            if (Sec === 60) {
                Sec = 0;
                Min++;
            }
            if (Min === 60) {
                Min = 0;
                H++;
            }
            document.getElementById("hours").innerText = formatTime(H);
            document.getElementById("minutes").innerText = formatTime(Min);
            document.getElementById("seconds").innerText = formatTime(Sec);
            document.getElementById("milliseconds").innerText = formatMilliseconds(Ms);
        }, 10);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    Running = false;
    clearInterval(tl);
});

document.getElementById("reset").addEventListener("click", () => {
    Running = false;
    clearInterval(tl);
    H = 0;
    Min = 0;
    Sec = 0;
    Ms = 0;
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
});

document.getElementById("pause").addEventListener("click", () => {
    if (Running) {
        Running = false;
        clearInterval(tl);
    }
});

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(Ms) {
    return Ms < 100 ? (Ms < 10 ? `00${Ms}` : `0${Ms}`) : Ms;
}     
