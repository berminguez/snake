import Head from 'next/head';
import SnakeGame from '../components/SnakeGame';

export default function Home() {
  return (
    <>
      <Head>
        <title>Snake Game</title>
      </Head>

      <main className='container max-w-4xl m-auto'>
        <SnakeGame />
      </main>
    </>
  );
}
