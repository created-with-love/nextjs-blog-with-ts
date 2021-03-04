import { AxiosResponse } from 'axios';
import React from 'react';
import styled from 'styled-components';

import { PostData } from '../../interfaces/post';
import { instance } from '../../helpers/axiosInstance';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ButtonEl from '../../components/Button';
import { PostLiEl, PostPar, PostHeader } from '../../styles/common';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Post = ({ post }: { post: PostData }): JSX.Element => {
  const router = useRouter();

  return (
    <Layout title={`Post-${post.id} page`}>
      <PostLiEl>
        <PostHeader>{post.title}</PostHeader>
        <PostPar>{post.body}</PostPar>
      </PostLiEl>
      <ButtonBox>
        <ButtonEl onClick={() => router.push('/')} text="Go back to blog" />
      </ButtonBox>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const postId = ctx.query.postId;

  const apiResponse: AxiosResponse<PostData> = await instance.get(
    `/posts/${postId}`,
  );
  const data: PostData = apiResponse.data;

  return {
    props: {
      post: data as PostData,
    },
  };
};

export default Post;
