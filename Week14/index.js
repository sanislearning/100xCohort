"use strict";
function hey() {
    console.log("San only has improvement left");
}
function delayer(fn) {
    setTimeout(fn, 1000);
}
delayer(hey);
