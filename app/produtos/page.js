import "../css/listagem.css";

import { Produto } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaProduto (formData) {
    'use server';
    const id = formData.get('id');
    const produto =  await Produto.findByPk(id);
    await produto.destroy();
    redirect('/produtos');
}

async function Produtos() {
    const produtos = await Produto.findAll();
    return (
        <div>

            <h1>Produtos</h1>
            <a href="/produtos/novo">Criar produto</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        produtos.map(function (produto) {
                            return (
                                <tr key={produto.id}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.preco}</td>
                                    <td>
                                        <form action={deletaProduto}>
                                            <input type="hidden" name="id" defaultValue={produto.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/produtos/edita'}>
                                            <input type="hidden" name="id" defaultValue={produto.id} />
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

export default Produtos;