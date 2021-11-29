function updateTimer() {
    future = Date.parse("feb 1, 2022 10:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>Days</span></div>' +
        '<div>' + h + '<span>Hours</span></div>' +
        '<div>' + m + '<span>Minutes</span></div>' +
        '<div>' + s + '<span>Seconds</span></div>';
  }
setInterval('updateTimer()', 1000);

console.log("Someone got access to Admin panel")

function WriteToFile(passForm) {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("Admin views.txt", True);

    // var d = new Date(); // for now
    // d.getHours(); // => 9
    // d.getMinutes(); // =>  30
    // d.getSeconds(); // => 51
    
    s.writeline("1 view at => ");
    //s.writeline(d)
    s.Close();
 }