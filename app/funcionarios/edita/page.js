import { Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaFuncionario(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const telefone = formData.get('telefone');
    const cargo = formData.get('cargo');
    const cpf = formData.get('cpf');

    const funcionario = await Funcionario.findByPk(id);
    funcionario.nome = nome;
    funcionario.telefone = telefone;
    funcionario.cargo = cargo;
    funcionario.cpf = cpf;

    await funcionario.save();

    redirect('/funcionarios');
}

async function TelaEditaFuncionario({ searchParams }) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);
    return (
        <>
        <h1>Editando o funcionário</h1>

        <div>

        <form action={editaFuncionario}>

            <input type="hidden" name="id" defaultValue={funcionario.id} />

            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" defaultValue={funcionario.nome}/> <br/>

            <label htmlFor="telefone">Telefone</label><br></br>
            <input type="text" name="telefone" defaultValue={funcionario.telefone}/> <br/>

            <label htmlFor="cargo">Cargo</label><br></br>
            <input type="text" name="cargo" defaultValue={funcionario.cargo}/> <br/>

            <label htmlFor="cpf">Cpf</label><br></br>
            <input type="text" name="cpf" defaultValue={funcionario.cpf}/> <br/>

            <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaFuncionario;