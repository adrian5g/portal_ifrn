import CircularButton from '@/components/ui/circular-button';
import NavOption from '@/components/ui/nav-option';
import { Contrast, Moon, Search } from 'lucide-react';
import { Instagram, TwitterX, Linkedin, YouTube, Spotify } from '@/components/ui/icons'
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='bg-gray-1 py-4'>
        <div className='mx-14 flex justify-between'>
          <div className='flex gap-10 items-center'>
            <Link href={'/'}>
              <img src='/logo.svg' alt='Logo' />
            </Link>

            <div className='text-secondary max-w-70 text-gray-600'>
              Educação, Ciência, Cultura e Tecnologia em todo o Rio Grande do Norte
            </div>
          </div>

          <div className='flex gap-6 items-center'>
            <div className='flex gap-2'>
              <CircularButton>
                <Instagram className='w-5 h-5' />
              </CircularButton>
              <CircularButton>
                <TwitterX className='w-5 h-5' />
              </CircularButton>
              <CircularButton>
                <Linkedin className='w-5 h-5' />
              </CircularButton>
              <CircularButton>
                <YouTube className='w-5 h-5' />
              </CircularButton>
              <CircularButton>
                <Spotify className='w-5 h-5' />
              </CircularButton>
            </div>

            <div className='w-[1px] h-6 bg-gray-500'></div>

            <div className='flex gap-2'>
              <CircularButton>
                <Contrast className='w-5 h-5' />
              </CircularButton>

              <CircularButton>
                <Moon className='w-5 h-5' />
              </CircularButton>
            </div>

            <div className='flex items-center bg-white p-2 rounded-full gap-2 text-gray-500'>
              <Search strokeWidth={3} className='w-4 h-4' />
              <input type='text' placeholder='Buscar' className='outline-0' />
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className='mx-14 flex gap-4 py-4 border-b-[1px] border-b-gray-300'>
          <NavOption text='Processos seletivos' url='#' />
          <NavOption text='Cursos' url='#' />
          <NavOption text='Campi' url='#' />
          <NavOption text='Institucional' url='/institucional' />
          <NavOption text='Acesso à Informação' url='#' />
          <NavOption text='Eventos' url='#' />
          <NavOption text='Serviçoes' url='#' />
        </div>
      </nav>
    </header>
  );
}
