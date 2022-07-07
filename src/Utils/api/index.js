import axios from "axios";

export default axios.create({
    baseURL: "https://exam-portal-by-hritik-sanam.herokuapp.com",
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    }
});