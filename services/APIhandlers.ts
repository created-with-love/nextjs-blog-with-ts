import { instance } from '../helpers/axiosInstance';

export const createNewPost = async ({ title, body }: {title: string, body: string}) => {
    try {
        const response = await instance.post(`/posts`, { title, body });
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}