const selectPeso = document.querySelector('.formulario .peso');
const selectAltura = document.querySelector('.formulario .altura');
const selectButton = document.querySelector('.formulario #enviar');
const msg = document.querySelector('.msg');
let criarTag = document.createElement('p');


selectButton.addEventListener('click', (event) =>{
    event.preventDefault();
   const peso = Number(selectPeso.value);
   const altura = Number(selectAltura.value);
   
   const p = msg.querySelector('p');

   if (p !== null){
    msg.removeChild(msg.lastElementChild);
}

   if (!peso) {
       setResultado ('Peso Invalido', '');
       criarTag.classList.add('bg-red')
       return;
   }

   if (!altura) {
    setResultado ('Altura Invalido', '');
    criarTag.classList.add('bg-red')
    return;
    }
    criarTag.classList.add('bg-green')
    setResultado(calImc(peso, altura), clasImc(calImc(peso, altura))) 
        
})

function calImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(1);
}

function setResultado (msg, msg2) {
    const resultado = msg + ' ' + msg2;
    criaP(resultado);
}

function criaP (resultado, classif) {
    criarTag.innerText = resultado;
    msg.appendChild(criarTag);
}

function clasImc (value) {
    if(value >= 40){
        return "Obedisade Grau 3";
    }
    if(value >= 35){
        return "Obedisade Grau 2";
    }
    if(value >= 30){
        return "Obedisade Grau 1";
    }
    if(value >= 25){
        return "Sobrepeso";
    }
    if(value >= 18){
        return "Normal";
    }

    if(value < 18){
        return "Abaixo do Peso";
    }
}




