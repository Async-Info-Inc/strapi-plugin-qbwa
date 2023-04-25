import { axiosInstance } from "../utils";

const taskRequests = {
    getSettings: async () => {
        const data = await axiosInstance.get(`/qbwa/settings`);
        return data;
    },
    setSettings: async (data) => {
        return await axiosInstance.post(`/qbwa/settings`, {
            apiKey: data,
        });
    },
    getStyleSheets: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets`);
        return data;
    },
};
export default taskRequests;
