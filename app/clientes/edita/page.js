import { Cliente } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaCliente(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const bairro = formData.get('bairro');
    const telefone = formData.get('telefone');
    const email = formData.get('email');

    const cliente = await Cliente.findByPk(id);
    cliente.nome = nome;
    cliente.bairro = bairro;
    cliente.telefone = telefone;
    cliente.email = email;

    await cliente.save();

    redirect('/clientes');
}

async function TelaEditaCliente({ searchParams }) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
        <>
        <h1>Editando o cliente</h1>

        <div>

        <form action={editaCliente}>

            <input type="hidden" name="id" defaultValue={cliente.id} />

            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" defaultValue={cliente.nome}/> <br/>

            <label htmlFor="bairro">Bairro</label><br></br>
            <input type="text" name="bairro" defaultValue={cliente.bairro}/> <br/>

            <label htmlFor="telefone">Telefone</label><br></br>
            <input type="text" name="telefone" defaultValue={cliente.telefone}/> <br/>

            <label htmlFor="email">Email</label><br></br>
            <input type="text" name="email" defaultValue={cliente.email}/> <br/>

            <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaCliente;