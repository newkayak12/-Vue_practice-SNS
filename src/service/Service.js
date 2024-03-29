import store from "@/store";
import axios from "axios";
class Service{
    constructor(){
        this.$axios = axios.create({
         headers:{
           Accept:"application/json", "Content-Type":"application/json"
         },
         withCredentials:true
        })
        this.$axios.interceptors.request.use((config)=>{
            const auth = store.getters['user/getAuthorization']
            config.headers.Authorization = auth
            return config
        })
        this.$axios.interceptors.response.use((response)=>{
            return response
        }, (response)=>{
            return -1
        })
    }
    get(path ='', param={}){
        return this.$axios.get(path, { param })
    }
    patch(path="", param={}){
        return this.$axios.patch(path, param, {
            responseType:"json",
        })
    }
    post(path="", param={}){
        return this.$axios.post(path, param,{
            responseType:'json'
        })
    }
    delete(path="", param={}){
        return this.$axios.delete(path,param,{
            responseType:'json'
        })
    }
    setToken(token="", userData={}){
        store.commit('user/setAuthorization', {authorization:token})
        store.commit('user/setUserData', {userData:userData})
        localStorage.setItem("userData", JSON.stringify(userData))
    }
    deleteToken(token = "", userData={}){
        store.commit('user/setAuthorization', )
        store.commit('user/setUserData', )
        localStorage.removeItem("userData")
    }
}
export default Service