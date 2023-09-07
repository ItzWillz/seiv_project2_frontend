import apiClient from "./services.js";

export default{
    getAll() {
        return apiClient.get("/courses");
      },
    create(data){
        return apiClient.post("/", data);
    },
    update(id, data) {
        return apiClient.put(`/courses/${id}`, data);
      },
      delete(id) {
        return apiClient.delete(`/courses/${id}`);
      },
};