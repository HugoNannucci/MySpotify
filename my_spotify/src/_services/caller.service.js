import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/'
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error;

    if (response.status === 401) {
        window.location.reload();
    }

    throw error;
})

export default axiosClient