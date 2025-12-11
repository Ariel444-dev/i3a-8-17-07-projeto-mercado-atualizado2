import "../css/listagem.css";

import { Funcionario } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaFuncionario (formData) {
    'use server';
    const id = formData.get('id');
    const funcionario =  await Funcionario.findByPk(id);
    await funcionario.destroy();
    redirect('/funcionarios');
}

async function Funcionarios() {
    const funcionarios = await Funcionario.findAll();
    return (
        <div>

            <h1>Funcionários</h1>
            <a href="/funcionarios/novo">Criar funcionário</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cargo</th>
                        <th>Cpf</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        funcionarios.map(function (funcionario) {
                            return (
                                <tr key={funcionario.id}>
                                    <td>{funcionario.id}</td>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.telefone}</td>
                                    <td>{funcionario.cargo}</td>
                                    <td>{funcionario.cpf}</td>
                                    <td>
                                        <form action={deletaFuncionario}>
                                            <input type="hidden" name="id" defaultValue={funcionario.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/funcionarios/edita'}>
                                            <input type="hidden" name="id" defaultValue={funcionario.id} />
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

export default Funcionarios;