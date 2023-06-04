import { React } from 'react';
import './Resposta.css';



const Resposta = props => {

    return (


        <div className='respostaTempo'>


            <div className='graus'>{props.description}</div>
            <div className='tempo_descricao'>{props.temp_min}<code>&deg;</code>{"c"} </div>
            <div className='local_nome'>{props.name}</div>

        </div>
    )
};


export default Resposta;
