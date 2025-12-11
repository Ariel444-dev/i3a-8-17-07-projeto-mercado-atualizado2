import "../css/listagem.css";

import { Venda } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaVenda (formData) {
    'use server';
    const id = formData.get('id');
    const venda =  await Venda.findByPk(id);
    await venda.destroy();
    redirect('/vendas');
}

async function Vendas() {
    const vendas = await Venda.findAll();
    return (
        <div>

            <h1>Vendas</h1>
            <a href="/vendas/novo">Criar venda</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Quantidade_de_produtos</th>
                        <th>Número_da_venda</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        vendas.map(function (venda) {
                            return (
                                <tr key={venda.id}>
                                    <td>{venda.id}</td>
                                    <td>{new Date(venda.data).toLocaleDateString()}</td>
                                    <td>{venda.valor}</td>
                                    <td>{venda.quantidade_produtos}</td>
                                    <td>{venda.numero_venda}</td>
                                    <td>
                                        <form action={deletaVenda}>
                                            <input type="hidden" name="id" defaultValue={venda.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/vendas/edita'}>
                                            <input type="hidden" name="id" defaultValue={venda.id} />
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

export default Vendas;