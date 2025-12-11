import { Produto } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function insereProduto(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        preco: formData.get('preco')
    };
    await Produto.create(dados);
    redirect('/produtos');
}

function TelaNovoProduto(){
    return  (
        <div>
            
        <form action={insereProduto}>
            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" /> <br/>

            <label htmlFor="preco">Preço</label><br></br>
            <input type="number" name="preco" step="0.01" min="0" /> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>

        </div>
    );
}
export default TelaNovoProduto;