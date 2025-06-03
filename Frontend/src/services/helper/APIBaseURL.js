import axios from "axios";

const APIBaseURL = axios.create({
    baseURL: 'http://localhost:8765'
});

export default APIBaseURL;