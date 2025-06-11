import Link from "next/link";

type NewsCardType = {
  imageSource: string;
  hat: string;
  title: string;
  subtitle: string;
  date: string;
};

export default function NewsCard({ imageSource, hat, title, subtitle, date }: NewsCardType) {
  return (
    <Link className='group hover:cursor-pointer' href={"/noticia"}>
      <img src={imageSource} alt='Imagem da Noticia' className='w-[274px] h-[274px] rounded-3xl' />
      <p className='text-[20px]'>{hat}</p>
      <h2 className='text-[22px] text-green-2 font-medium max-w-[274px] group-hover:text-green-3 transition duration-500'>
        {title}
      </h2>
      <h3 className='text-[16px] max-w-[274px]'>{subtitle}</h3>
      <p className='text-[14px] text-gray-500 mt-2'>{date}</p>
    </Link>
  );
}