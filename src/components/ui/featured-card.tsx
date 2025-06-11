type FeaturedCardType = {
  hoverText: string;
  imageSource: string;
};

export default function FeaturedCard({ hoverText, imageSource }: FeaturedCardType) {
  return (
    <div className='w-[290px] h-[515px] rounded-2xl overflow-hidden relative hover:cursor-pointer group'>
      <img src={imageSource} alt='imagem do card' className='group-hover:scale-110 transition duration-1000' />
      
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
      
      <p className='absolute max-w-[150px] left-10 bottom-10 text-white font-semibold text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500'>{hoverText}</p>
    </div>
  );
}