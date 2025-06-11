type StatisticCardType = {
  children: React.ReactNode;
  stats: string;
  title: string;
};

export default function StatisticCard({ children, stats, title }: StatisticCardType) {
  return (
    <div className='border-[1px] rounded-[6px] px-8 py-6 relative border-gray-500'>
      <div className='text-green-2 absolute top-6 left-[-25px] py-2 bg-white'>{children}</div>
      <p className='text-4xl text-gray-2 font-bold'>{stats}</p>
      <h2 className='text-[20px] text-gray-2'>{title}</h2>
    </div>
  );
}