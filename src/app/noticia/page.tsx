type MenuType = {
  name: string;
  children: React.ReactNode;
};

function Menu({ name, children }: MenuType) {
  return (
    <div className='w-[350px]'>
      <h2 className='text-green-2 text-2xl font-light'>{name}</h2>

      <div className='border-l-[1px] border-green-2 mt-6'>{children}</div>
    </div>
  );
}

type MenuOptionType = {
  name: string;
  selected?: boolean;
};

function MenuOption({ name, selected = false }: MenuOptionType): React.ReactNode {
  return selected ? (
    <p className='font-semibold px-8 py-2 border-l-[4px] border-green-2 bg-green-1 hover:cursor-pointer'>
      {name}
    </p>
  ) : (
    <p className='font-semibold px-8 py-2 hover:bg-green-1 hover:cursor-pointer'>{name}</p>
  );
}

export default function Home() {
  return (
    <>
      <div className='max-w-[900px] mx-auto my-8'>
        <h2 className='text-green-3 text-5xl font-bold mb-8'>
          Curso de Formação Continuada EJA-EPT abre inscrições para relatos de experiência
        </h2>

        <div className='flex flex-col gap-4'>
          <p>
            O Instituto Federal do Rio Grande do Norte (IFRN), em parceria com o Ministério da
            Educação (MEC), abriu inscrições para submissão de relatos de experiência voltados ao
            curso de Formação Continuada em Integração Curricular para a Educação de Jovens e
            Adultos articulada à Educação Profissional e Tecnológica (EJA-EPT). A iniciativa integra
            o Programa Nacional de Formação para a Docência na EJA (ProfEJA) e busca valorizar o
            protagonismo docente, promovendo o compartilhamento de práticas pedagógicas inovadoras
            no ensino da EJA.
          </p>

          <p>
            As inscrições seguem abertas até o dia 30 de junho de 2025, ou até que sejam recebidas
            500 propostas. As submissões devem ser feitas exclusivamente por meio do Portal do
            Candidato no Sistema Gestor de Concursos (SGC).
          </p>

          <p>
            A proposta de publicação dos relatos faz parte do processo de fortalecimento da formação
            continuada, com o objetivo de dar visibilidade às experiências desenvolvidas ao longo do
            curso “Currículo Integrado para Educação de Jovens e Adultos e Educação Profissional e
            Tecnológica (EJA-EPT)”. A iniciativa busca estimular a construção coletiva de saberes e
            ampliar o repertório metodológico de educadores e educadoras que atuam na área.
          </p>

          <h2 className='text-green-3 text-3xl font-bold'>Participação</h2>

          <p>
            Para participar, é necessário comprovar a conclusão do curso por meio do certificado
            emitido. Cada participante poderá submeter apenas um relato, com extensão entre três e
            cinco páginas, conforme estrutura descrita no edital. As experiências devem refletir as
            vivências pedagógicas no contexto da formação, abordando práticas que contribuam para a
            integração curricular e o fortalecimento do processo de ensino-aprendizagem na EJA-EPT.
          </p>

          <p>
            As propostas serão avaliadas por uma comissão composta por pareceristas ad hoc, que
            analisarão os aspectos formais e o mérito pedagógico dos relatos. Os textos aprovados
            serão organizados e publicados em formato de e-book gratuito pela Editora IFRN, com
            lançamento previsto para o dia 30 de setembro de 2025, disponível no repositório
            institucional do IFRN e no AVAMEC do curso.
          </p>

          <p>
            Para a professora Anna Catharina Dantas, coordenadora do curso, a chamada representa um
            convite ao diálogo e à valorização da prática docente. “Queremos dar voz aos educadores
            que atuam na EJA-EPT, valorizando o trabalho desenvolvido nas escolas e inspirando novas
            práticas pedagógicas. Essa é uma oportunidade única de compartilhar saberes, refletir
            sobre a prática e contribuir com a formação continuada de outros colegas”.
          </p>

          <p>Mais informações estão disponíveis no edital completo.</p>
        </div>
      </div>
    </>
  );
}
