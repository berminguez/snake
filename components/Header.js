export default function Header() {
  return (
    <header className='w-full bg-gray-900 p-12'>
      <h1 className='text-white'>
        <img
          src='/snake-logo-dark.svg'
          alt='Snake Logo'
          className='h-6 md:h-8 w-auto'
        />
      </h1>
    </header>
  );
}
