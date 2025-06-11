import FeaturedCard from '@/components/ui/featured-card';
import NewsCard from '@/components/ui/news-card';
import StatisticCard from '@/components/ui/statistic-card';
import {
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  GraduationCap,
  LaptopMinimal,
  SquaresExclude,
  Store,
  Users,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* DESTAQUES */}
      <div className='mx-14 flex justify-between my-8'>
        <FeaturedCard
          hoverText='Acesse a página dos jogos'
          imageSource='/cards/Jogos_Intercampi_Estudantis.png'
        />
        <FeaturedCard hoverText='Saiba mais' imageSource='/cards/Modo_Aviao_Destaque.png' />
        <FeaturedCard
          hoverText='Confira o resultado'
          imageSource='/cards/Programa_PartiuIF_Destaque.png'
        />
        <FeaturedCard
          hoverText='Confira os detalhes'
          imageSource='/cards/Post_Pe_de_meia_licenciaturas.png'
        />
      </div>

      {/* NOTÍCIAS */}
      <div className='mx-14 my-8'>
        <h2 className='text-green-3 text-5xl font-bold mb-8'>Notícias</h2>

        <div className='flex justify-between'>
          <NewsCard
            imageSource='/news/1.png'
            hat='Relato de Experiência'
            title='Curso de Formação Continuada EJA-EPT abre inscrições para relatos de experiência'
            subtitle='Educadores que concluíram o curso poderão ter suas práticas publicadas em e-book da Editora IFRN'
            date='Há 1 dia'
          />

          <NewsCard
            imageSource='/news/2.png'
            hat='Graduação'
            title='IFRN abre 148 vagas para cursos superiores com ingresso no 2º semestre de 2025'
            subtitle='Inscrições vão de 3 de junho a 7 de julho e seleção será feita com base nas notas do Enem'
            date='Há 1 dia'
          />

          <NewsCard
            imageSource='/news/3.jpg'
            hat='Leitura'
            title='IFRN sedia seminário da Rede Nordeste de Ensino de Literatura'
            subtitle='Evento ocorreu entre os dias 5 e 6 de junho no Campus Natal-Central'
            date='Há 1 dia'
          />

          <NewsCard
            imageSource='/news/4.png'
            hat='Esportes'
            title='Estudante do IFRN garante vaga na Seleção Brasileira Universitária de Taekwondo'
            subtitle='Sthefane Raila, discente do Campus Natal-Centro Histórico, competirá no Mundial de Taekwondo 2025, na Alemanha'
            date='Há 1 dia'
          />
        </div>
      </div>

      {/* NÚMEROS */}
      <div className='mx-14 my-8'>
        <h2 className='text-green-3 text-5xl font-bold mb-8'>IFRN em números</h2>

        <p className='max-w-[800px] text-2xl mb-10'>
          Em uma instituição centenária, os números tendem a ser superlativos. No IFRN, esse
          conceito é levado ao extremo, sempre com foco na qualidade dos serviços prestados à
          sociedade. Somos:
        </p>

        <div className='grid grid-cols-4 gap-10'>
          <StatisticCard stats='22' title='Campi (Unidades de Ensino)'>
            <Building2 size={50} />
          </StatisticCard>

          <StatisticCard stats='222' title='Ofertas de Cursos'>
            <SquaresExclude size={50} />
          </StatisticCard>

          <StatisticCard stats='35.275' title='Estudantes matriculados'>
            <GraduationCap size={50} />
          </StatisticCard>

          <StatisticCard stats='2.978' title='Servidores Públicos'>
            <Users size={50} />
          </StatisticCard>

          <StatisticCard stats='9' title='Incubadoras'>
            <Store size={50} />
          </StatisticCard>

          <StatisticCard stats='6' title='Núcleos de Tecnologia'>
            <LaptopMinimal size={50} />
          </StatisticCard>

          <StatisticCard stats='423' title='Projetos de Extensão em andamento'>
            <BriefcaseBusiness size={50} />
          </StatisticCard>

          <StatisticCard stats='722' title='Projetos de Pesquisa em andamento'>
            <FlaskConical size={50} />
          </StatisticCard>
        </div>
      </div>
    </>
  );
}
