import axios from 'axios'

export const API = axios.create({
    // baseURL: 'http://47.129.219.195:8000',
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
})