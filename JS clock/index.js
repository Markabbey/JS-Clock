// clock design

const WEEK =["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function updateTime() {
    var now = new Date();

    document.getElementById("time") .innerText =
    zeropadding(now.getHours(),1) + ":" +
    zeropadding(now.getMinutes(), 1) + ":" +
    zeropadding(now.getSeconds(), 1);




    document.getElementById("date").innerText = 
    now.getFullYear() + "-" +
    zeropadding(now.getMonth() + 1, 2) + "-" +
    zeropadding(now.getDate(), 2) + " " +
    WEEK[now.getDay()];

    
}

updateTime();
setInterval(updateTime,1000);

function zeropadding(num, digit) {
    return String(num).padStart(digit, "0");
}
