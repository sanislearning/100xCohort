3//Calculate the time it takes between a setTimeout call and the inner function actually running
let startTime=Date.now(); //Date.now() gets time at the instant
function timecalc(){
    const endTime=Date.now();
    const elapsedTime=endTime-startTime;
    console.log(`Elaspsed time : ${elapsedTime} ms`);
}
setTimeout(timecalc,1000);
