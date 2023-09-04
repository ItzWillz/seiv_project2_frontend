import apiClient from "./services.js";

export default{
    create(data){
        return apiClient.post("/", data);
    },
};