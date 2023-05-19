import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 5000,
});

// 请求拦截器
api.interceptors.request.use(config => {
    // 在请求头中添加 token
    const token = 'your_token_here';
    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
}, error => {
    // 请求错误处理
    return Promise.reject(error);
});

// 响应拦截器
api.interceptors.response.use(response => {
    // 处理响应数据
    return response.data;
}, error => {
    // 统一处理异常情况
    console.error('API Error:', error);

    // 可以根据实际需求进行统一的错误处理，例如显示错误提示、记录日志等
    return Promise.reject(error);
});

const fetchData = () => {
    return api.get('/data');
};
const login = (credentials) => {
    return api.post('/login', credentials);
};

// 其他的 API 调用

const apiMethods = {
    fetchData,
    login,
    // 其他的 API 方法
};

export default apiMethods;