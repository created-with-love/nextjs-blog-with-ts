import React from 'react';
import styled from 'styled-components';
import { PostData } from '../interfaces/post';
import Post from './Post';

const Ul = styled.ul`
  list-style: none;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    '. . '
    '. . '
    '. . ';
`;

const Posts = ({ posts }: { posts: PostData[] }): JSX.Element => {
  return (
    <Ul>
      {posts &&
        posts.map(
          (post: PostData) =>
            post.title && post.body && <Post post={post} key={post.id} />,
        )}
    </Ul>
  );
};

export default Posts;
