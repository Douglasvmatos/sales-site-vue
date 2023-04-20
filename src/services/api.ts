import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://animechan.vercel.app/api/"
})

export default api