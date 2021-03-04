import { useRouter } from 'next/router';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const DivSub = styled.div`
  margin: 25px;
  cursor: pointer;

  &:hover {
    color: rgb(168, 168, 168);
  }
`;

export const Toolbar = (): JSX.Element => {
  const router = useRouter();

  return (
    <Div>
      <DivSub onClick={() => router.push('/')}>Blog</DivSub>
      <DivSub onClick={() => router.push('/posts/new')}>
        Create a new post
      </DivSub>
    </Div>
  );
};
