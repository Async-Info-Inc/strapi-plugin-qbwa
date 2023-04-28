import { axiosInstance } from "../../admin/src/utils";

const api_base = '/qbwa/css';

const taskRequests = {
    getAllFiles: async () => {
        const data = await axiosInstance.get(`${api_base}?name=index`);
        return data.data;
    },
    getFile: async (name) => {
        const data = await axiosInstance.get(`${api_base}?name=${name}`);
        return data.data;
    },
    writeFile: async (name, data) => {
        return await axiosInstance.post(`${api_base}`, {
            name: name,
            data: data,
        });
    },
    deleteFile: async (name) => {
        return await axiosInstance.post(`${api_base}`, {
            name: name,
            action: 'delete'
        });
    }
};
export default taskRequests;
