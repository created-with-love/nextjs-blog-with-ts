import styled from 'styled-components';

export const PostLiEl = styled.li`
  width: 80%;
  margin: 30px auto;
  list-style: none;
  text-align: center;
`;

export const PostLiElBig = styled(PostLiEl)`
  align-items: center;
`;

export const PostPar = styled.p`
  text-align: justify;
  color: rgb(115, 138, 148);
  font-size: 1.8rem;
  line-height: 1.5em;
`;

export const PostParSmall = styled(PostPar)`
  font-size: 1.3rem;
  line-height: 1.2em;
`;

export const PostHeader = styled.h2`
  font-size: 2.5rem;
  line-height: 1.15em;
  color: rgb(21, 23, 26);
`;

export const PostHeaderSmall = styled(PostHeader)`
  font-size: 2rem;
`;

export const ButtonSecondary = styled.button`
   display: inline-block;
   padding: 0.3em 1.2em;
   margin: 0 0.1em 0.1em 0;
   border: 0.16em solid rgba(255, 255, 255, 0);
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   text-align: center;
   transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

export const Button = styled(ButtonSecondary)`
  background-color: #008cba;
   color: #ffffff;
`;
