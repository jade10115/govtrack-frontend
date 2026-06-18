import axios from 'axios'

const api = axios.create({
    // Updated to point to your REAL live server instead of the xxxx placeholder
    baseURL: 'https://govtrack-hqsd.onrender.com/api',
    headers: {
        Accept: 'application/json'
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api