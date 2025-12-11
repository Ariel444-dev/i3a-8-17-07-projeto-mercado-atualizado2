import "../css/listagem.css";

import { Categoria } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaCategoria (formData) {
    'use server';
    const id = formData.get('id');
    const categoria =  await Categoria.findByPk(id);
    await categoria.destroy();
    redirect('/categorias');
}

async function Categorias() {
    const categorias = await Categoria.findAll();
    return (
        <div>

            <h1>Categorias</h1>
            <a href="/categorias/novo">Criar categoria</a>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        categorias.map(function (categoria) {
                            return (
                                <tr key={categoria.id}>
                                    <td>{categoria.id}</td>
                                    <td>{categoria.nome}</td>
                                    <td>
                                        <form action={deletaCategoria}>
                                            <input type="hidden" name="id" defaultValue={categoria.id} />
                                            <button>Excluir</button>
                                        </form>

                                        <form action={'/categorias/edita'}>
                                            <input type="hidden" name="id" defaultValue={categoria.id} />
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

export default Categorias;