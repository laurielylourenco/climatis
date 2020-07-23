var cidade = document.getElementById('cidade');
const chave = "1e88f70422cf39e04785fea7cec7c376";
var res = document.getElementById('resultado')

function buscarPrevisao() {
    var c = cidade.value;
    var linguagem = "pt-br";
    var unidade = "metric";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=" + chave + "&lang=" + linguagem + "&units=" + unidade + "";

    fetch(url, {
            method: "GET",
        })
        .then(response => {
            if (response.ok) {
                console.log(response.url)
                return response.json()
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                });
            }

        })
        .then(function (data) {
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        });
}
function mostrarPrevisao(dados){

    document.getElementById('des').innerHTML = dados.weather[0].description;
    document.getElementById('min').innerHTML = dados.main.temp_min;
    //document.getElementById('max').innerHTML = dados.main.temp_max;
    document.getElementById('local').innerHTML = dados.name;
    //dados quero descricao, max e min,local.
}