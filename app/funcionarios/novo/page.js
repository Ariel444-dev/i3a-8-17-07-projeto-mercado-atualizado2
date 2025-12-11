import { Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";

async function insereFuncionario(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        telefone: formData.get('telefone'),
        cargo: formData.get('cargo'),
        cpf: formData.get('cpf')
    };
    await Funcionario.create(dados);
    redirect('/funcionarios');
}

function TelaNovoFuncionario(){
    return  (
        <div>
            
        <form action={insereFuncionario}>
            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" /> <br/>

            <label htmlFor="telefone">Telefone</label><br></br>
            <input type="text" name="telefone" /> <br/>

            <label htmlFor="cargo">Cargo</label><br></br>
            <input type="text" name="cargo" /> <br/>

            <label htmlFor="cpf">Cpf</label><br></br>
            <input type="text" name="cpf" /> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>

        </div>
    );
}
export default TelaNovoFuncionario;