import { axiosInstance } from "../../admin/src/utils/axiosInstance";

const taskRequests = {
    getFile: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets?name=index`);
        return data;
    },
    createFile: async (name, data) => {
        return await axiosInstance.post(`/qbwa/styleSheets`, {
            name: name,
            data: data,
        });
    }
};
export default taskRequests;
