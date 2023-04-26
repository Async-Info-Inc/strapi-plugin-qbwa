import { axiosInstance } from "../utils";

const taskRequests = {
    getStyleSheets: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets?name=index`);
        return data;
    },
    createStyleSheet: async (name, data) => {
        return await axiosInstance.post(`/qbwa/styleSheets`, {
            name: name,
            data: data,
        });
    }
};
export default taskRequests;
