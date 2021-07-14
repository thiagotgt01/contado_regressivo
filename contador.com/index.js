window.addEventListener('load',()=>{

    //disparando o codigo pelo botão. interação com usuario

    const botao = document.getElementById("botao");

    botao.addEventListener("click",()=>{
        //para n ocorrer possiveis erros com o codigo do index.JS 
    //quando a pagina carregar completamente execute o codigo a seguir: ....

    //window.addEventListener('load',()=>{

    //Tempo em sec
    let sec = 180;

    const countDiv = document.getElementById("timer");

    const secpass = () => {
        
        let min = Math.floor(sec/60);
        let secRestantes = sec % 60;

        if(secRestantes < 10){
            secRestantes = "0" + secRestantes;
        }


        if(min < 10){
            min = "0" + min;
        }

        //vai gerar um formato de 00:00     min:sec
        countDiv.innerHTML = min + ":" +secRestantes;

        //condição final
        if(sec > 0){
            sec = sec - 1;

        }else{
            countDiv.innerHTML = "Acabou !";
        }

    }

    const countDown = setInterval(() => secpass(),1000);

    //});//fim "window.addEventListener"
    });

});







