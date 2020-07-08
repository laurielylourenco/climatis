var cidade = document.getElementById('city');
const chave = "1e88f70422cf39e04785fea7cec7c376";
var res = document.getElementById('resultado')
//var local = window.localStorage;


function buscarPrevisao() {
    var c = cidade.value;
    var linguagem = "pt-br";
    var unidade = "metric";
    const myHeaders = new Headers({
        "Content-Type": "text/plain",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": `${chave}`

    });

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=" + chave + "&lang=" + linguagem + "&units=" + unidade + "";
    var req = new Request(url, {
        "method": "GET",
        "headers": myHeaders,
        "mode": "no-cors",
        "credentials": "include",
    });

    fetch(req)
        .then(response => {
       console.log(response);
            
        })
        .catch(error => {
            console.log(error);
            

        });

}