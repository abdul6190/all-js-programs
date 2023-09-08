function clock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.clear();
    if (hours>12){
        hours-=12
        console.log(`${hours}:${minutes}:${seconds} PM`);
    }
    else{
        console.log(`${hours}:${minutes}:${seconds} AM`);
    }
}

setInterval(clock, 1000);