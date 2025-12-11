import { Venda } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaVenda(formData) {
    'use server';

    const id = formData.get('id');
    const data = formData.get('data');
    const valor = formData.get('valor');
    const quantidade_produtos = formData.get('quantidade_produtos');
    const numero_venda = formData.get('numero_venda');

    const venda = await Venda.findByPk(id);
    venda.data = data;
    venda.valor = valor;
    venda.quantidade_produtos = quantidade_produtos;
    venda.numero_venda = numero_venda;

    await venda.save();

    redirect('/vendas');
}

async function TelaEditaVenda({ searchParams }) {
    const id = searchParams.id;
    const venda = await Venda.findByPk(id);
    return (
        <>
        <h1>Editando a venda</h1>

        <div>

        <form action={editaVenda}>

            <input type="hidden" name="id" defaultValue={venda.id} />

            <label htmlFor="data">Data</label><br></br>
            <input type="date" name="data" defaultValue={venda.data}/> <br/>

            <label htmlFor="valor">Valor</label><br></br>
            <input type="number" name="valor" step="0.01" min="0" defaultValue={venda.valor}/> <br/>

            <label htmlFor="quantidade_produtos">Quantidade_de_produtos</label><br></br>
            <input type="number" name="quantidade_produtos" step="1" min="1" defaultValue={venda.quantidade_produtos}/> <br/>

            <label htmlFor="numero_venda">Número_da_venda</label><br></br>
            <input type="number" name="numero_venda" defaultValue={venda.numero_venda}/> <br/>

            <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaVenda;