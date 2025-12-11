import { Entrega } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaEntrega(formData) {
    'use server';

    const id = formData.get('id');
    const data = formData.get('data');
    const rua = formData.get('rua');
    const numero_rua = formData.get('numero_rua');
    const bairro = formData.get('bairro');

    const entrega = await Entrega.findByPk(id);
    entrega.data = data;
    entrega.rua = rua;
    entrega.numero_rua = numero_rua;
    entrega.bairro = bairro;

    await entrega.save();

    redirect('/entregas');
}

async function TelaEditaEntrega({ searchParams }) {
    const id = searchParams.id;
    const entrega = await Entrega.findByPk(id);
    return (
        <>
        <h1>Editando a entrega</h1>

        <div>

        <form action={editaEntrega}>

        <input type="hidden" name="id" defaultValue={entrega.id} />

        <label htmlFor="data">Data</label><br></br>
        <input type="date" name="data" defaultValue={entrega.data}/> <br/>

        <label htmlFor="rua">Rua</label><br></br>
        <input type="text" name="rua" defaultValue={entrega.rua}/> <br/>

        <label htmlFor="numero_rua">Número da rua</label><br></br>
        <input type="number" name="numero_rua" defaultValue={entrega.numero_rua}/> <br/>

        <label htmlFor="bairro">Bairro</label><br></br>
        <input type="text" name="bairro" defaultValue={entrega.bairro}/> <br/>

        <button>Salvar</button>

        </form>

        </div>

        </>
    );
}

export default TelaEditaEntrega;