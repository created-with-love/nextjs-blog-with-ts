import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonEl from '../../components/Button';
import Layout from '../../components/Layout';
import { createNewPost } from '../../services/APIhandlers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0.5rem;
  color: #666;
  box-shadow: inset 0 0 0.25rem #ddd;
  &:focus {
    outline: none;
    border: 1px solid darken(#ddd, 5%);
    box-shadow: inset 0 0 0.5rem darken(#ddd, 5%);
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 600px;
  margin: 40px auto;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  & input {
    color: #666;
    padding: 0.5rem;
    min-height: 40px;
  }
`;

const Span = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ButtonsBox = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;

const WarningPar = styled.p`
  color: red;
  margin: 10px 0;
  padding: 0;
  font-size: 12px;
`;

const FormInput = styled.input`
  max-width: 100%;
  width: 220px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0.5rem;
  color: #666;
  box-shadow: inset 0 0 0.25rem #ddd;
`;

const newPost = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [isTipsVisible, setTipsVisible] = useState(false);
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTipsVisible(true);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
    setTipsVisible(true);
  };

  const handleSumbit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const data = await createNewPost({ title, body: postText });
    if (data.title && data.body) {
      toast('🦄 Post is created', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setTitle('');
    setPostText('');
    setTipsVisible(false);
  };

  return (
    <Layout title="Create a new Post">
      <div>
        <ToastContainer />
        <Form>
          <h1>Create a New post</h1>
          <Label>
            <Span>Title</Span>
            <FormInput
              value={title}
              onChange={handleTitleChange}
              required={true}
            />
            {!title && isTipsVisible && (
              <WarningPar>This field is required</WarningPar>
            )}
          </Label>

          <Label>
            <Span>Post content</Span>
            <TextArea
              value={postText}
              onChange={handleTextAreaChange}
              required={true}
              maxLength={2000}
            ></TextArea>
            {!postText && isTipsVisible && (
              <WarningPar>This field is required</WarningPar>
            )}
          </Label>
          <ButtonsBox>
            <ButtonEl
              onClick={handleSumbit}
              text="Submit"
              type="submit"
              disabled={!title || !postText ? true : false}
            />
            <ButtonEl
              onClick={() => router.push('/')}
              text="Go back to blog"
              type="button"
            />
          </ButtonsBox>
        </Form>
      </div>
    </Layout>
  );
};

export default newPost;
