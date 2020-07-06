var cidade = document.getElementById('cidade');
const chave = "1e88f70422cf39e04785fea7cec7c376";
//var local = window.localStorage;
var cidade = cidade.value;
console.log(cidade);

function buscarPrevisao() {

	fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt-br", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
				"x-rapidapi-key": `${chave}`
			}
		})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});

}


//let  api =  api.openweathermap.org/data/2.5/weather?q={city}&appid={chave}


/*let cam =  api + cidade +"&appid="+chave
    console.log(cidade)
    console.log(cam)
    let dados = cam;
    let obj = JSON.stringify({dados});
    console.log(obj)
*/