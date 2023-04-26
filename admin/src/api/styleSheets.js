import { axiosInstance } from "../utils";

const taskRequests = {
    getStyleSheets: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets?name=index`);
        return data;
    },
    createStyleSheet: async (name) => {
        return await axiosInstance.post(`/qbwa/styleSheets`, {
            name: name,
        });
    }
};
export default taskRequests;
