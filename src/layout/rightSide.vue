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
        <p @click="fnSignUp">회원가입</p>
      </div>
    </div>
    <div class="loggedin" v-else>
      <img :src="userData.image" alt="" style="width: 10rem; height: 10rem; border-radius: 100%" v-if="userData.image">
      <div class="profile_background" v-else></div >
      <div>
        <p>{{ userData.userId }}</p>
        <p>{{userData.userName}}</p>
        <p>
          <span>{{`팔로워:${followerLength}`}}</span>
          <span>{{` 팔로잉 :${followingLength}`}}</span>
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
    // if(localStorage.getItem("userData")!==null){
    //   this.userData =JSON.parse(localStorage.getItem("userData"))
    // }
  },
  data(){
    return {
      userData:{
        userId:'',
        userName:'',
        image:'',
        follower:[],
        following:[]
      },
      form:{
        userNo:1,
        id:'',
        img:'https://w.namu.la/s/9d861e060e3dba0ab3d17acf5282b1ad11b4d494a57cedac0fa26154f93e7649a4cc22d4ef6dcfc8dee4c59469ed85d9ecbb2db057921750e6583f238541fa81fce4730a467a3ce2faf4383499fb0df20112d74e3d914e46aa32e98ab68853bb',
        password:'',
        name:'최웅',
        follower:12000,
        following:10
      }
    }
  },
  computed:{
    followerLength(){
      console.log(this.userData)
      return this.userData.follower.length
    },
    followingLength(){
      return this.userData.following.length
    }
  },
  methods:{
    async fnLogin(){
      if(this.form.id.length<4){
        alert('아이디를 입력하세요')
        return
      }
      if(this.form.password.length<4){
        alert('비밀번호를 입력하세요')
        return
      }
      const response = await this.$SignSvc.signIn({userId:this.form.id, password:this.form.password})
      console.log(response)
      if(response===-1){
        return alert("아이디, 비밀번호를 확인해세요")
      }
      this.userData = response.userData
    },
    fnLogout(){
    },
    fnSignUp(){
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
.profile_background{
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXFxcX////CwsLe3t7b29vT09Pn5+f19fXOzs77+/vJycnw8PDq6urt7e0K8aSoAAAE+klEQVR4nO2di5qqMAyEsQpy0fd/3WOXZYuKCiTpTD35n8D50maS0NaqchzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRwHQJiD/jHa3CT17enYNEPk0hxPdV99j8wQ2uO16w4PdOem/gaVoaqvT+ISw7EtWmSU91rdFMtTW6rG0J/eRG/Opa0KFBn6yzp5P5xPpUkM1XGDvsjQF6UxrF2fcy7laAzt5/yyRFfKUg2nXfoi1zIkNrsF3sLI7xyhPQsE3jiiFXwgtDtSzINE6iiGWqrvwL0ZBTlmzoDW8RIlgbcKhzSKKkt0hHShtmoCD4cGLWaJXpxF5zBmVKEPPlKzSQySSmaJDq3oAbU0mjijNd0jL2WeodqKYUs/v5oeLSthsEYjRMYfDNZohCafGoWQKNn0RgJpko26Fc7gSDa65do9FEE024WRgUGhdkF6T41WV+k2Tc8QBNGmnEngc42V20/g5+B6o4tl4MvU0gxHwALNFyk+m9pm0kiDXaamdj8C7qGsvSKC9YtgWtCMtFCFlXmiQTuiXWuYwKYaa7+PQD0/QyoFJ9Ow9dTMHjpXaKowgx0eDq7QFbrC/1yhef8LV/j9bpGjpoEq/P669D/oLb6/P8zR42OHbWHfie5NgOc09naBPjpkPy+9oMf65qkG/WnGvjJFf14zr2rwx4asPR9/ViEMtgrBE++IbWkK/0AaMc2m+EVqbPpoux+xzDUMIbStTQnyTMSucoNXbL+YzaM6dD3zRzBSiC5JE0bpFDuCesCk1ac55l2pXltLcF1gM0g2HGaf0C/A6W51a1c2HNXMHOWtyLUJR1S7fc7LzoquyFPM3KOXUNFKXqI0eOtIOoolVKLYUb9To7AXB9I9OCHOqFe0go8In2/hM/ol9uebAh7g+WHXO1gR/hU6EXbZRsfUD35k23t0P/p4RhZrCOG01RmvdUFPRIaq2bMRu6aM1xNDqPfbxZk/kDd9smZ/INcoid8sjmgZL9HQx6wx9HrDKManPoPyPLFh245aCzTBtlQtTtVc0KISCs9BLkLTaRh+yCfpFi0P1BDMTa1W6AR8pWY4rA8+BJ3jvgV0M2a5MoN8CDPLracD0BkznGL/BTOiynER4Q/IOdqcAiGP0+VboiPZF2quJJPIm27y3Kx8IOcNL4jAnBKz3KtcIlcBF+xvAr0iVxkOE5jpCENWp38kh/ODssyEfbYxOWe5BfMRXI6rze8xPqphfctpBbb3hGBOOMfUFfFrNGK4TqFGkbCzjCxzpzXYzabQyv4w0gf2+jlGvo/2+jkmL0kQWGHCwhTh5do9FsVbhndaNqB/o4bGKSbUHcP+zeeNaF/dowuhfhDZQqi9EwlDqB1EvhAqB5HLCycUCxuqciahWNjgRsDvUbsfRZlnInq5Bq3kJUr6yGruOUr1N8l0ZgmliQ3HgG0ZlbEb0fDiGZ1xBu8iVTqiwWqGIwqWSGuGIwqWSNf63qPQCDNn0og4m1J8bXqH+EsUaVuRkDcY3NtQoQ/m9oqI0C+oC5oRYVmT4zVrIdK3eti3oXgj8m9D4Uakd8OIyBELSDTCVEPc3idkjT5/ohGmmhISjSjVFJFoRKmGvPudEHTB9I3FiKC9KCKVipIp+QRjQjLJQP/2lewXyD6jmdg/q+H9JHPP7o/BhdihwBALsUOBIRbRWUR2dxd5/qFSgd1/MFBISfOhqPkHhUBa66YjQ/cAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-size: 100%;

}
</style>