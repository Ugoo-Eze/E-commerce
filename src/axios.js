import axios from 'axios'

const instance = axios.create({
    baseURL: '...' // API URL (CLOUD FUNCTION)
})

export default instance;