import axios from "axios";

export default axios.create({
    baseURL: "https://drivetic.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});