export default ({
    namespaced:true,
    state:{
        authorization:'',
        userData:{
            userId:'',
            userName:'',
        }
    },
    mutations:{
        setAuthorization(state, {authorization=''}){
            state.authorization = authorization
        },
        setUserData(state,{userData={}}){
            state.userData=userData
        }
    },
    getters:{
        getAuthorization(state){
            return state.authorization
        },
        getUserData(state){
            return state.userData
        }
    }

})