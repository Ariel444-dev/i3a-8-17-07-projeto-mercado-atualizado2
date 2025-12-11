import { Cliente } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function insereCliente(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        bairro: formData.get('bairro'),
        telefone: formData.get('telefone'),
        email: formData.get('email')
    };
    await Cliente.create(dados);
    redirect('/clientes');
}

function TelaNovoCliente(){
    return  (
        <div>
            
        <form action={insereCliente}>
            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" /> <br/>

            <label htmlFor="bairro">Bairro</label><br></br>
            <input type="text" name="bairro" /> <br/>

            <label htmlFor="telefone">Telefone</label><br></br>
            <input type="text" name="telefone" /> <br/>

            <label htmlFor="email">Email</label><br></br>
            <input type="text" name="email" /> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>

        </div>
    );
}
export default TelaNovoCliente;