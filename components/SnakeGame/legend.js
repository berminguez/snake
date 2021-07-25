export default function Legend() {
  return (
    <div className='hidden md:block gamesnake-legend pt-6'>
      <div>
        <span className='font-sans text-customwhite uppercase text-lg'>
          Controls
        </span>
        <hr className='border-customwhite py-2' />
        <div className='flex py-4 gap-16 flex-wrap justify-center'>
          <div className='text-customwhite font-sans flex gap-4 items-center'>
            <img src='/teclas.svg' className='w-24' />
            <span>move</span>
          </div>

          <div className='text-customwhite font-sans flex gap-4 items-center'>
            <img src='/spacebar.svg' className='h-8' />
            <span>start/restart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
