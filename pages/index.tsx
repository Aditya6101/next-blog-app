import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Blog | Read, Write and Learn | By Aditya Kamble </title>
        <meta name="description" content="Blogging App built in Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-blue-600 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
