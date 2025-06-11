import Link from 'next/link';

type NavOptionTypes = {
  text: string;
  url: string;
};

export default function NavOption({ text, url }: NavOptionTypes) {
  return (
    <Link className='text-green-3 font-semibold hover:text-green-2 hover:cursor-pointer' href={url}>
      {text}
    </Link>
  );
}
