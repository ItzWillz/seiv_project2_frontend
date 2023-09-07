import axios from "axios";

var baseurl = "http://localhost:8081/";



const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
  },
  transformResponse: function (data) {
    data = JSON.parse(data);
    // if (!data.success && data.code == "expired-session") {
    //   localStorage.deleteItem("user");
    // }
    // console.log(Utils.getStore("user"))
    return data;
  },
});

export default apiClient;