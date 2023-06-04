import { React, useState } from 'react';
import { WiCloud } from "react-icons/wi";
import './Formulario.css';



import Resposta from "./Resposta.jsx";


const Formulario = () => {
    const [cidade, setCidade] = useState('');
    const [temperatura, setTemperatura] = useState({});

    const handleChange = (event) => {
        setCidade(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(cidade){
            var teste = getData(cidade)
            teste
                .then(t => setTemperatura(t))
                .catch(erro => alert("Ocorreu um erro na chamada da API"))
        } else{

            alert("Campo vazio!!!")
        }

    };



    async function getData(cidade) {

        var c = cidade;
        var linguagem = "pt_br";
        const chave = process.env.NEXT_PUBLIC_API_KEY;

        console.log('chave:  ',chave)

        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + c + "&units=metric" + "&appid=" + chave + "&lang=" + linguagem + "";

        const res = await fetch(url);

        if (!res.ok) {

            throw new Error('Failed to fetch data');
        }

        return res.json();
    }

    return (

        <div className="corpo container">

            <div className="panel box">

                <div className="img_tempo">
                 <h1><WiCloud> </WiCloud></h1>
                </div>


                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={cidade}
                        onChange={handleChange}
                        placeholder='Digite nome da cidade'
                    />


                    <button type="submit">Enviar</button>
                </form>

                {(temperatura.weather) ? <Resposta description={temperatura.weather[0].description} temp_min={temperatura.main.temp_min} name={temperatura.name} > </Resposta> : ""}


            </div>
        </div>
    );
};

export default Formulario;
