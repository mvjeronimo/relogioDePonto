const time = setInterval(() =>{
    
    let datetoday = new Date();
    let hour = datetoday.getHours();
    let minutes = datetoday.getMinutes();
    let seconds = datetoday.getSeconds();

    document.getElementById("hora").innerHTML = hour;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;
});