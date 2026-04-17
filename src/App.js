function Projects() {
  const projetos = [
    { id: 1, nome: "Portfólio React", descricao: "Meu primeiro projeto em React" },
    { id: 2, nome: "Site Escolar", descricao: "Projeto da escola" },
    { id: 3, nome: "Blog Pessoal", descricao: "Projeto simples em React" }
  ];

  return (
    <div>
      <h2>Meus Projetos</h2>

      {projetos.map((p) => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
