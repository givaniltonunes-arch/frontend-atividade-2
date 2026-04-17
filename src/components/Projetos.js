function Projetos() {
  const projetos = [
    {
      nome: "Portfólio HTML",
      descricao: "Projeto da atividade 1 migrado para React",
      link: "https://givaniltonunes-arch.github.io/meuportifolio/"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((p, index) => (
        <div key={index}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
          <a href={p.link} target="_blank">Ver projeto</a>
        </div>
      ))}
    </section>
  );
}

export default Projetos;