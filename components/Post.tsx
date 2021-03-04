import { useRouter } from 'next/router';
import React from 'react';

import { PostData } from '../interfaces/post';
import { PostLiElBig, PostParSmall, PostHeaderSmall } from '../styles/common';
import { ButtonSecondary } from '../styles/common';

const Post = ({ post }: { post: PostData }): JSX.Element => {
  const router = useRouter();

  const shortBody =
    post.body.length > 60 ? post.body.slice(0, 60) + '...' : post.body;

  const handleShowMoreButton = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <PostLiElBig>
      <PostHeaderSmall>{post.title}</PostHeaderSmall>
      <PostParSmall>{shortBody}</PostParSmall>
      <ButtonSecondary type="button" onClick={handleShowMoreButton}>
        Read more...
      </ButtonSecondary>
    </PostLiElBig>
  );
};

export default Post;
