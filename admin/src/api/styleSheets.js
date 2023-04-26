import { axiosInstance } from "../utils";

const taskRequests = {
    getStyleSheets: async () => {
        const data = await axiosInstance.get(`/qbwa/styleSheets/index`);
        return data;
    },
};
export default taskRequests;
