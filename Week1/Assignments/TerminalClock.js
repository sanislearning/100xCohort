//Create a terminal clock (HH:MM:SS)

function displayClock(){
    const now=new Date(); //creating an object of Date class
    const hours=String(now.getHours()).padStart(2,'0'); //gets the hours, ensures that the number is two digits by adding a leading 0
    const minutes=String(now.getMinutes()).padStart(2,'0');//similar code but for minutes
    const seconds=String(now.getSeconds()).padStart(2,'0');
    const timeString=`${hours}:${minutes}:${seconds}`;
    process.stdout.clearLine(0); //Clears the current line in the terminal
    process.stdout.cursorTo(0); //Moves cursor to beginning of the current line
    process.stdout.write(timeString); //Prints the time to the terminal without a newline
}
setInterval(displayClock,1000)