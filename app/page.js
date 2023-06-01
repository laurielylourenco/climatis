'use client';
import { useState } from 'react';
import './componets/Formulario.css';
/* import { useState } from 'react'; */



export default async function Page() {

  const [cidade, setCidade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviar para um banco de dados ou fazer uma requisição HTTP.

    console.log('cidade:', cidade);

  };

  return (

    <div className="corpo container">

      <div className="panel box">

        <form >

          <input type="text" placeholder="Digite nome da cidade" />
          <button>Buscar</button>
        </form>

        <div className='respostaTempo'>

        </div>
      </div>
    </div>
  )
}