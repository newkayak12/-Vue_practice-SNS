<template>
  <div class="liner">
    <div class="header-container">
      <div class="search">
        <span class="xi-search"></span>
        <input type="text" placeholder="트위터 검색">
      </div>
    </div>
    <div class="login-form" v-if="userData===''">
      <div class="login">
        <input type="text" placeholder="아이디" v-model="form.id">
        <input type="password" placeholder="비밀번호" v-model="form.password">
        <button @click="fnLogin"> 로그인 </button>
      </div>
    </div>
    <div class="loggedin" v-else>
      <img :src="userData.img" alt="" style="width: 10rem; height: 10rem; border-radius: 100%">
      <div>
        <p>{{ userData.id }}</p>
        <p>{{userData.name}}</p>
        <p>
          <span>{{`팔로워:${userData.follower}`}}</span>
          <span>{{` 팔로잉 :${userData.follower}`}}</span>
        </p>
      </div>
      <button @click="fnLogout"> 로그아웃 </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightSide",
  beforeMount() {
    if(localStorage.getItem("userData")!==null){
      this.userData =JSON.parse(localStorage.getItem("userData"))
    }
  },
  data(){
    return {
      userData:'',
      form:{
        id:'',
        img:'https://w.namu.la/s/9d861e060e3dba0ab3d17acf5282b1ad11b4d494a57cedac0fa26154f93e7649a4cc22d4ef6dcfc8dee4c59469ed85d9ecbb2db057921750e6583f238541fa81fce4730a467a3ce2faf4383499fb0df20112d74e3d914e46aa32e98ab68853bb',
        password:'',
        name:'최웅',
        follower:12000,
        following:10
      }
    }
  },
  methods:{
    fnLogin(){
      if(this.form.id.length<4){
        alert('아이디를 입력하세요')
        return
      }
      if(this.form.password.length<4){
        alert('비밀번호를 입력하세요')
        return
      }
      localStorage.setItem("userData", JSON.stringify(this.form))
      this.userData =JSON.parse(localStorage.getItem("userData"))
    },
    fnLogout(){
      localStorage.removeItem("userData")
      this.userData = ''
    }
  }
}
</script>

<style scoped>
.liner{
  border: 1px #eff3f4 solid;
  position: fixed;
  top: 0;
  left:80vw;
  height: 100vh;
}
.header-container{
  width: 20vw;
  z-index: 40;
  height: 4rem;
  border: 1px #eff3f4 solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #dddddd;
  position: relative;
}
.search>span{
  font-size: 1.5rem;
  position: absolute;
  left: 2rem;

}
.search> input{
  width: 90%;
  height: 2rem;
  background-color: #dddddd;
  padding-left:3rem;
  font-size: 1rem;
  border-radius: 20px;
}
.login-form{
  padding: 3rem;
}
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.1rem;
}
.login input{
  margin-bottom: 0.5rem;
  width: 100%;
  height: 1.5rem;
}
.login button{
  width: 100%;
  height: 2rem;
  border-radius: 30px;
  background-color: rgb(54,173,111);
  font-size: 1rem;
  color: white;
}
.loggedin{
  margin: 0.3rem;
  display: flex;
  border: 1px #eff3f4 solid;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loggedin img {
  margin-bottom: 1rem;
}
.loggedin p {
  margin-bottom: 0.5rem;
}
.loggedin button{
  width: 100%;
  height: 2rem;
  border-radius: 30px;
  margin-top: 1rem;
  background-color: rgb(54,173,111);
  font-size: 1rem;
  color: white;
}
</style>