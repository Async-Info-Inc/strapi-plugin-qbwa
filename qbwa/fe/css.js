import { axiosInstance } from "../../admin/src/utils/axiosInstance";

const taskRequests = {
    getAllFiles: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets?name=index`);
        return data;
    },
    getFile: async (name) => {
        const data = await axiosInstance.get(`/qbwa/styleSheets?name=${name}`);
        return data;
    },
    writeFile: async (name, data) => {
        return await axiosInstance.post(`/qbwa/styleSheets`, {
            name: name,
            data: data,
        });
    },
    deleteFile: async (name) => {
        return await axiosInstance.post(`/qbwa/styleSheets`, {
            name: name,
            action: 'delete'
        });
    }
};
export default taskRequests;
