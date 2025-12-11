import { Entrega } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function insereEntrega(formData) {
    'use server';
    const dados = {
        data: formData.get('data'),
        rua: formData.get('rua'),
        numero_rua: formData.get('numero_rua'),
        bairro: formData.get('bairro')
    };
    await Entrega.create(dados);
    redirect('/entregas');
}

function TelaNovoEntrega(){
    return  (
        <div>
            
        <form action={insereEntrega}>
            <label htmlFor="data">Data</label><br></br>
            <input type="text" name="data" /> <br/>

            <label htmlFor="rus">Rua</label><br></br>
            <input type="text" name="rua" /> <br/>

            <label htmlFor="numero_rua">Número da rua</label><br></br>
            <input type="text" name="numero_rua" /> <br/>

            <label htmlFor="bairro">Bairro</label><br></br>
            <input type="text" name="bairro" /> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>

        </div>
    );
}
export default TelaNovoEntrega;