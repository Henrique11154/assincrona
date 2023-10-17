// scripts.js
/*
function soAceitaPares(num) {
    if ( num % 2 == 0 ) {
        return 'É par';
    } else {
        return 'Não é par';
    }
}
*/

function soAceitaPares( num ) {
    return new Promise(function (resolve, reject) {
        if ( num % 2 == 0 ) {
            resolve('É par');
        } else {
            reject('Não é par');
        }
    })
}

console.log("Antes do teste");          // 1

soAceitaPares(10)                       // 3
    .then(resposta => console.log(resposta))     // Resolve -> deu certo
    .catch(erro => console.error(erro));   // Reject -> deu errado

console.log("Depois do teste");         // 2


// API
// let url = "https://restcountries.com/v3.1/name/brasil";
// fetch(url)
//     .then(resposta => resposta.json())
//     .then(pais => console.log( pais[0].flag ))
//     .catch(erro => console.error(erro));
let btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", clickBuscarPais);

function clickBuscarPais(evento){
    let txtPais = document.querySelector("#txtPais");
    let nomePais = txtPais.value;
    buscaPais(nomePais);
}

// buscaPais("");

function buscaPais( nomePais ){
    let url = "https://restcountries.com/v3.1/name/" + nomePais;

    fetch(url)
        .then(resposta => resposta.json())
        // Extraindo JSON da resposta(Then do Fetch)
        .then(pais => mostraPais(pais))
        // Then do json()
        .catch(erro => console.log(erro));
}

function mostraPais(pais){

    // Bandeira
    let imgBandeira = document.querySelector("#imgBandeira");
    imgBandeira.src = pais[0].flags.png;

    // Nome do país
    document.querySelector("h1").innerHTML = pais[0].name.common;

    // Informações Diversas
    let info = document.querySelector("#info");
    info.innerHTML = "";

    

    let htmlCapital = `
        <div class="infoLinha">
            <span class="infoNome">Capital</span>
            <span class="infoValor"> ${pais[0].capital[0]}</span>
        </div>
        `
    ;

    info.innerHTML = htmlCapital;
    
}