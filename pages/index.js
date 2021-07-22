import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Snake Game</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container max-w-4xl m-auto'>
        <div className='grid grid-cols-1 gap-4 '>
          <div className='flex justify-between gap-4 flex-wrap'>
            <div className='bg-gray-500 h-32 w-full sm:w-64'></div>
            <div className='bg-gray-500 h-32 w-full sm:w-64'></div>
          </div>
          <div>
            <div className='bg-gray-500 h-96 w-full'></div>
          </div>
          <div>
            <div className='flex justify-end gap-4'>
              <div className='bg-gray-500 h-32 w-32'></div>
              <div className='bg-gray-500 h-32 w-32'></div>
              <div className='bg-gray-500 h-32 w-32'></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
