import { Venda } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function insereVenda(formData) {
    'use server';
    const dados = {
        data: formData.get('data'),
        valor: formData.get('valor'),
        quantidade_produtos: formData.get('quantidade_produtos'),
        numero_venda: formData.get('numero_venda')
    };
    await Venda.create(dados);
    redirect('/vendas');
}

function TelaNovoVenda(){
    return  (
        <div>
            
        <form action={insereVenda}>
            <label htmlFor="data">Data</label><br></br>
            <input type="date" name="data" /> <br/>

            <label htmlFor="valor">Valor</label><br></br>
            <input type="number" name="valor" step="0.01" min="0" /> <br/>

            <label htmlFor="quantidade_produtos">Quantidade_de_produtos</label><br></br>
            <input type="number" name="quantidade_produtos" step="1" min="1" /> <br/>

            <label htmlFor="numero_venda">Número_da_venda</label><br></br>
            <input type="number" name="numero_venda" /> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>

        </div>
    );
}
export default TelaNovoVenda;