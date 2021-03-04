import Head from 'next/head';
import { AxiosResponse } from 'axios';
import { AxiosDataProps, PostData } from '../interfaces/post';
import PostsEL from '../components/Posts';
import { instance } from '../helpers/axiosInstance';
import { Toolbar } from '../components/Toolbar';

export default function Posts({ posts }: { posts: PostData[] }): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog feed page</title>
        <meta name="description" content={`This is the blog feed page`} />
        <meta property="og:title" content={`This is the blog feed page`} />
      </Head>
      <main>
        <Toolbar />
        <PostsEL posts={posts} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const apiResponse: AxiosResponse<AxiosDataProps[]> = await instance.get(
    `/posts`,
  );
  const data: AxiosDataProps[] = apiResponse.data;

  return {
    props: {
      posts: data as AxiosDataProps[],
    },
  };
};
