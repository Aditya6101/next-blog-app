import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { apiResponse, Blog } from "../types/index";
import BlogList from "../components/BlogList";

const Home: NextPage<apiResponse> = ({ data, success }) => {
  const blogs = data as Blog[];

  return (
    <div>
      <Head>
        <title>Next Blog | Read, Write and Learn | By Aditya Kamble </title>
        <meta name="description" content="Blogging App built in Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {success && <BlogList blogs={blogs} />}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await (
    await fetch(`https://next-blog-app-six.vercel.app/api/blogs`)
  ).json();
  return {
    props: blogs,
  };
};

export default Home;
