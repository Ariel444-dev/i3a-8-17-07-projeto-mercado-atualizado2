import { Produto } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaProduto(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const preco = formData.get('preco');

    const produto = await Produto.findByPk(id);
    produto.nome = nome;
    produto.preco = preco;

    await produto.save();

    redirect('/produtos');
}

async function TelaEditaProduto({ searchParams }) {
    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return (
        <>
        <h1>Editando o produto</h1>

        <div>

        <form action={editaProduto}>

            <input type="hidden" name="id" defaultValue={produto.id} />

            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" defaultValue={produto.nome}/> <br/>

            <label htmlFor="preco">Preço</label><br></br>
            <input type="number" name="preco" defaultValue={produto.preco} step="0.01" min="0" />

            <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaProduto;