import Menu from "../componentes/menu";
import "./css/base.css";

export const metadata = {
  title: 'Mercado',
  description: 'Projeto Node.js com Next.js',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body>
        <header>
          <Menu />
        </header>

        <main>
          {children}
        </main>
        <img src="https://img.freepik.com/fotos-gratis/banca-de-vegetais-e-frutas-frescas_1101-2560.jpg?semt=ais_hybrid&w=740&q=80" alt=""></img>
        <footer>
          <p>Assistente online de IA: Valentine.</p>
        </footer>
      </body>
    </html>

  )
}
