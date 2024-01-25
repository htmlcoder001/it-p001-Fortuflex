function dtime_nums(d, like_eu) {
    var now = new Date;
    now.setDate(now.getDate() + d);
    var dayNum = "";
    if (now.getDate() < 10) {
        dayNum = "0"
    }
    dayNum += now.getDate();
    var monthNum = "";
    if (now.getMonth() + 1 < 10) {
        monthNum = "0"
    }
    monthNum += now.getMonth() + 1;
    if (like_eu === true) {
        document.write(dayNum + "." + monthNum + "." + now.getFullYear())
    } else {
        document.write(monthNum + "." + dayNum + "." + now.getFullYear())
    }
}