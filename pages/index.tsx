import { AxiosResponse } from 'axios';
import { AxiosDataProps, PostData } from '../interfaces/post';
import PostsEL from '../components/Posts';
import { instance } from '../services/APIhandlers';
import Layout from '../components/Layout';

export default function Posts({ posts }: { posts: PostData[] }): JSX.Element {
  return (
    <Layout title="Blog feed page">
      <main>
        <PostsEL posts={posts} />
      </main>
    </Layout>
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
