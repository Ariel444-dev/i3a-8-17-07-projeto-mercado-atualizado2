import "../app/css/menu.css";

function Menu() {

    return (

        <nav>

            <div>
               <h1>Master Mercado</h1>
            </div>

            <div>
                <a href="/">Home</a>&nbsp;

                <a href="/clientes">Clientes</a>&nbsp;

                <a href="/entregas">Entregas</a>&nbsp;

                <a href="/funcionarios">Funcionários</a>&nbsp;

                <a href="/vendas">Vendas</a>&nbsp;

                <a href="/categorias">Categorias</a>&nbsp;
                
                <a href="/produtos">Produtos</a>

            </div>

        </nav>

    );
}



export default Menu;