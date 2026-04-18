export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      
      <h1>Meu Portfólio</h1>

      <section style={{ marginTop: "30px" }}>
        <h2>Sobre mim</h2>
        <p>Desenvolvedor em formação focado em React e aplicações web acessíveis.</p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Projetos</h2>
        <ul>
          <li>Projeto 1 - Portfólio Web</li>
          <li>Projeto 2 - Aplicação React</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Contato</h2>
        <p>Email: exemplo@email.com</p>
      </section>

    </div>
  );
}