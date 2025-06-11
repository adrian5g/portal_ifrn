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
  return selected ? 
  <p className='font-semibold px-8 py-2 border-l-[4px] border-green-2 bg-green-1 hover:cursor-pointer'>{name}</p> : 
  <p className='font-semibold px-8 py-2 hover:bg-green-1 hover:cursor-pointer'>{name}</p>;
}

export default function Home() {
  return (
    <>
      <div className='mx-14 my-8'>
        <h2 className='text-green-3 text-[45px] font-bold mb-8'>Institucional</h2>

        <div className='flex gap-8'>
          <div className='flex flex-col gap-4'>
            <p>
              A construção da identidade do Instituto Federal de Educação, Ciência e Tecnologia do
              Rio Grande do Norte tem sua marca na expansão, democratização e interiorização da
              educação profissional de qualidade, contribuindo, assim, para a inclusão social e
              possibilitando uma formação acadêmica sintonizada com as vocações territoriais e com
              as demandas formativas da população do campo e da cidade.
            </p>

            <p>
              A educação profissional, entre outras coisas, diz respeito à criação de um ambiente de
              convivência e integração entre os diversos níveis de formação ofertados que abarca
              diversas as áreas de conhecimento, contribuindo assim com a construção de uma visão de
              responsabilidade e desenvolvimento social. Esse modelo integrado motiva a comunidade
              acadêmica e eleva os indicadores institucionais de desempenho, impactando diretamente
              no desenvolvimento dos territórios de abrangência onde o Instituto está inserido.
            </p>

            <p>
              A educação ofertada pelo IFRN diz respeito, também, à formação cidadã, imbuída de
              valores éticos – com visão que busca compreender os fenômenos em sua totalidade – e
              preparados para uma atuação voltada ao contexto social.
            </p>

            <p>
              Assim, a atuação do Instituto ultrapassa a estrita formação profissional e técnica
              para o trabalho, preocupando-se em incorporar outras dimensões da constituição humana
              e da vida em sociedade.
            </p>

            <p>
              Está presente em todo o estado do Rio Grande do Norte por meio de seus 22 campi, do
              Polo Embrapii Centro de Tecnologia Mineral Professor José Yvan Pereira Leite e da
              Reitoria.
            </p>

            <h2 className='text-green-3 text-3xl font-bold mb-8'>Caracterização</h2>

            <p>
              Os Institutos Federais são instituições de educação superior, básica e profissional,
              pluricurriculares e multicampi, especializados na oferta de educação profissional e
              tecnológica nas diferentes modalidades de ensino, com base na conjugação de
              conhecimentos técnicos e tecnológicos com as suas práticas pedagógicas, na forma da
              Lei nº 11.892/2008. Detentores de autonomia administrativa, patrimonial, financeira,
              didático-pedagógica e disciplinar e, para efeito de avaliação e regulação da oferta de
              cursos superiores, equiparados às universidades, também atuam como instituições
              acreditadoras e certificadoras de competências profissionais, de acordo com a mesma
              lei.
            </p>

            <p>
              O IFRN, institucionalidade dada pelos termos da Lei 11.892/2008, faz parte da Rede
              Federal de Educação Profissional e Tecnológica, vincula-se ao Ministério da Educação,
              possui natureza jurídica de autarquia e detém autonomia administrativa, patrimonial,
              financeira, didático-pedagógica e disciplinar. Trata-se de uma instituição de educação
              superior, básica e profissional, especializada na oferta de educação profissional e
              tecnológica nas diferentes modalidades de ensino, conjugando conhecimentos
              científicos, técnicos e tecnológicos a ideais pedagógicos de fundamentação
              histórico-crítica.
            </p>

            <h2 className='text-green-3 text-3xl font-bold mb-8'>Definições</h2>

            <p>
              A partir da Lei nº 11.892/2008, foram definidas novas mudanças no perfil institucional, de modo que os agora denominados Institutos Federais de Educação, Ciência e Tecnologia passam a ter objetivos norteadores bem mais abrangentes e complexos, que – como já citado - se complementam ao de promoção da educação profissional e cidadã de qualidade nas diferentes modalidades e níveis de ensino, desde a oferta de cursos de formação inicial e continuada aos cursos técnicos, chegando aos cursos de nível superior de graduação e pós-graduação.
            </p>

            <p>
              Cabe ao IFRN, portanto, exercer um papel que envolve função social, missão, visão, valores e objetivos.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <Menu name='Menu'>
              <MenuOption name='Apresentação' />
              <MenuOption name='Administração' />
              <MenuOption name='Comissões permanentes' />
              <MenuOption name='Comunicação Institucional' />
              <MenuOption name='Ensino' />
              <MenuOption name='Estudantes' />
              <MenuOption name='Extensão' />
              <MenuOption name='Gabinete' />
              <MenuOption name='Gestão Estratégica' />
            </Menu>

            <Menu name='Conteúdo da página'>
              <MenuOption name='Caracterização' selected={true} />
              <MenuOption name='Definições' />
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
