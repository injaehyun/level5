import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SEVER_URL,
});

export default instance

// instance.interceptors.request.use(

//     function(config){
//         alert("아이디와 비밀번호를 모두 입력해주세요")
//         return config;
//     },
//     function(error){
//         return Promise.reject(error)
//     }
// )
// instance.interceptors.response.use(

//     function(response){
//         alert("로그인이 필요합니다.")
//         return response;
//     },
//     function(error){
//         return Promise.reject(error)
//     }
// )