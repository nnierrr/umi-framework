import axios from "axios";

export default axios.create({
    baseURL: "https://boilnierplate-backend.glitch.me/api/",
    headers: {
        "Content-Type": "application/json"
    }
});
