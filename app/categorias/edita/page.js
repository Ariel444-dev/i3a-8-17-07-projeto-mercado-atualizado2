import { Categoria } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaCategoria(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');

    const categoria = await Categoria.findByPk(id);
    categoria.nome = nome;

    await categoria.save();

    redirect('/categorias');
}

async function TelaEditaCategoria({ searchParams }) {
    const id = searchParams.id;
    const categoria = await Categoria.findByPk(id);
    return (
        <>
        <h1>Editando a categoria</h1>

        <div>

        <form action={editaCategoria}>

            <input type="hidden" name="id" defaultValue={categoria.id} />

            <label htmlFor="nome">Nome</label><br></br>
            <input type="text" name="nome" defaultValue={categoria.nome}/> <br/>

            <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaCategoria;