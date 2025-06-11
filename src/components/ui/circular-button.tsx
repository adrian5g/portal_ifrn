type CircularButtonTypes = {
  children: React.ReactNode;
};

export default function CircularButton({ children }: CircularButtonTypes) {
  return (
    <div className='h-10 w-10 flex items-center justify-center border-[1px] border-gray-400 text-gray-500 rounded-full hover:border-green-1 hover:bg-green-1 hover:cursor-pointer hover:text-green-3'>
      {children}
    </div>
  );
}