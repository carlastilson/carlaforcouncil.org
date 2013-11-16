var countdown = function () {
var date = new Date("May 30, 2013");
var description = "the Annual NYC Vehicle & Equipment Show at Flushing Meadows";
var now = new Date();
var diff = date.getTime() - now.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
if (days > 1) {
document.write("Only ");
document.write(days+1 + " days until " + description);
}
else if (days == 1) {
document.write("Just two days until " + description);
}
else if (days == 0) {
document.write("We'll be at " + description + " tomorrow");
}
 // Fill this next one in with the length in days of the show:
else if (days < -1) {
document.getElementById('show-announcement').style.visibility="hidden";
}
else if (days < 0) {
document.write("Come join us at " + description);
}
document.write("! &nbsp;&rsaquo;&rsaquo;");
};