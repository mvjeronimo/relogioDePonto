const time = setInterval(() =>{
    
    let datetoday = new Date();
    let hour = datetoday.getHours();
    let minutes = datetoday.getMinutes();
    let seconds = datetoday.getSeconds();

    document.getElementById("hora").innerHTML = hour;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;

    
});

function marcarPonto(){
    var dataExata = new Date()
    var hora = dataExata.getHours()
    var minuto = dataExata.getMinutes()
    
    var matricula = document.getElementById('matricula').value;
    var senha = document.getElementById('senha').value;

    if (matricula == "pc2022" && senha == "pc123"){
        alert("Ponto registrado com Sucesso às " + hora + ":" + minuto + " ");
    }else{
        alert("Matrícula ou senha incorreta");
    }
}

