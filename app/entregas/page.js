import "../css/listagem.css";

import { Entrega } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaEntrega (formData) {
    'use server';
    const id = formData.get('id');
    const entrega =  await Entrega.findByPk(id);
    await entrega.destroy();
    redirect('/entregas');
}

async function Entregas() {
    const entregas = await Entrega.findAll();
    return (
        <div>

            <h1>Entregas</h1>
            <a href="/entregas/novo">Criar entrega</a>
            <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Data</th>
                    <th>Rua</th>
                    <th>Número da rua</th>
                    <th>Bairro</th>
                    <th>AÇÕES</th>
                  </tr>
                </thead>

                <tbody>
                    {
                        entregas.map(function (entrega) {
                            return (
                                <tr key={entrega.id}>
                                    <td>{entrega.id}</td>
                                    <td>{new Date(entrega.data).toLocaleDateString()}</td>
                                    <td>{entrega.rua}</td>
                                    <td>{entrega.numero_rua}</td>
                                    <td>{entrega.bairro}</td>
                                    <td>
                                        <form action={deletaEntrega}>
                                            <input type="hidden" name="id" defaultValue={entrega.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/entregas/edita'}>
                                            <input type="hidden" name="id" defaultValue={entrega.id} />
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Entregas;