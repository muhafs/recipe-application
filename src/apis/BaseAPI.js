import axios from "axios";

const Api = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export default Api;
