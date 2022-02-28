import Service from "@/service/Service";
class SignSvc extends  Service{
    signIn(params={}){
        return this.$axios.get('/api/user/signIn', {params})
            .then(response=>{
                if(response!==-1){
                    const token = response.data.accessToken
                    const userData = response.data.userData
                    this.setToken(token, userData)
                }
                return response.data
            })
    }
    signOut(){
        return this.get('/api/user/signOut')
            .then(response=>{
                if(response!==-1){
                    const token = response.data.accessToken
                    const userData = response.data.userData
                    this.deleteToken(token, userData)
                }
                return response.data
            })
    }
}
export default new SignSvc();