export default function Header() {
  return (
    <header className='w-full bg-customblack p-12'>
      <div className='flex gap-8 content-center items-center'>
        <div>
          <h1 className='text-customwhite'>
            <img
              src='/SnakeLogo.svg'
              alt='Snake Logo'
              className='h-8 md:h-12 w-auto'
            />
          </h1>
        </div>
        <div className='hidden md:inline-flex'>
          <h2 className='text-customwhite font-sans font-light'>
            a pure Javascript game
          </h2>
        </div>
      </div>
    </header>
  );
}
