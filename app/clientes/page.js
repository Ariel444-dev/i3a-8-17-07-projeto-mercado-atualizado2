import "../css/listagem.css";

import { Cliente } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaCliente (formData) {
    'use server';
    const id = formData.get('id');
    const cliente =  await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/clientes');
}

async function Clientes() {
    const clientes = await Cliente.findAll();
    return (
        <div>

            <h1>Clientes</h1>
            <a href="/clientes/novo">Criar cliente</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Bairro</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        clientes.map(function (cliente) {
                            return (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.bairro}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.email}</td>
                                    <td>
                                        <form action={deletaCliente}>
                                            <input type="hidden" name="id" defaultValue={cliente.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/clientes/edita'}>
                                            <input type="hidden" name="id" defaultValue={cliente.id} />
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

export default Clientes;