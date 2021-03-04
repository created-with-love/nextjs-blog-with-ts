import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red',
  responseType: 'json',
});

export const createNewPost = async ({ title, body }: {title: string, body: string}) => {
    try {
        const response = await instance.post(`/posts`, { title, body });
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}