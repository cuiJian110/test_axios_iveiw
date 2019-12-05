/*
 * @Author: your name
 * @Date: 2019-12-03 15:58:59
 * @LastEditTime: 2019-12-05 10:13:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\api\request.js
 */
import axios from 'axios';
import QS from 'qs';
// axios.defaults.baseURL = "http://localhost:8080/static/";
// axios.defaults.timeout = 30000;

// 在外部
// axios.defaults.headers[属性名]可以在请求头里添加属性
// axios.defaults.headers.retry = 3;
// axios.defaults.headers.retryDelay = 1000;

// 创建实例
const instance = axios.create({
  baseURL: "http://localhost:8080/static/",
  timeout: 90000,
  // 创建实例这样在请求头中添加属性
  headers: {
    instance_key1: "instance_value1",
    instance_token: "instance_token"
  }
})
// 如果是创建实例的话，就用实例名字.interceptors.request.use
// 如果不是实例的话，就用axios.interceptors.request.use
instance.interceptors.request.use((request) => {
    console.log(request);
    // 在拦截器中
    // request.headers[属性名]可以在请求头里添加属性
    request.headers.interceptor_key1 = "value1";
    request.headers.token = "myToken";
    if(request.method === "post") {
        request.data = QS.stringify(request.data);
    }
    // Do something before request is sent
    return request;
  }, (error) => {
    console.log("request:",error);
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// 如果是创建实例的话，就用实例名字.interceptors.request.use
// 如果不是实例的话，就用axios.interceptors.request.use
instance.interceptors.response.use((response) => {
    // Do something with response data
    console.log("response",response);
    return response.data;
  },  
  (error) => {
    const {config, code, message} = error;
    // const config = config;
    console.dir(error);
    console.log(config);
    console.log(code);
    console.log(message);
    if (code === 'ECONNABORTED' || message === 'Network Error') {
      console.log("超时了，666")
      console.log(config.headers.retry)
      if(config.headers.retry = 0) {
        config.headers.retry = 3;
        return Promise.reject(error);
      }
      console.log(config)
      config.headers.retry = config.headers.retry - 1;
      
      return new Promise(resolve => {
        setTimeout(async _ => {
          resolve(await axios(config))
        }, 2000)
      })
    }
    // console.dir(error);
    // console.log(error);
    // Do something with response error
    return Promise.reject(error);
  });


const handleSuccess = data => {
    // console.log(data);
    return data;
}
const handleError = err => {
    // console.log(err);
    return err;
}
// 如果是创建实例的话，就用实例名字 .get
// 如果不是实例的话，就用axios.get
const getRequest = (url, params) => {
    return instance.get(url, {params}).then(res => handleSuccess(res)).catch(err => handleError(err));
}
const postRequest = (url, params) => {
    return instance.post(url, params).then(res => handleSuccess(res.data)).catch(err => handleError(err));
}
export {getRequest, postRequest};