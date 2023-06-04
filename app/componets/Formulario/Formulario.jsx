import { React, useState } from 'react';
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
        var teste = getData(cidade)
        teste
            .then(t => setTemperatura(t))
            .catch(erro => alert("Ocorreu um erro na chamada da API"))
    };



    async function getData(cidade) {

        var c = cidade;
        var linguagem = "pt_br";
        const chave = process.env.NEXT_PUBLIC_KEY;

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
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={cidade}
                        onChange={handleChange}
                    />


                    <button type="submit">Enviar</button>
                </form>

                {(temperatura.weather) ? <Resposta description={temperatura.weather[0].description} temp_min={temperatura.main.temp_min} name={temperatura.name} > </Resposta> : ""}


            </div>
        </div>
    );
};

export default Formulario;
