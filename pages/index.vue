<template>
  <div class="index">
    <br>
    <h1>ERIC-A</h1>
    <div>
      <br>
      안녕하세요 배송 로봇 ERIC-A입니다!
      <br>
      <br>
      <div class="menu">
        메뉴
      </div>
    <ul>
      <li @click="loginOrder">
        <button class="btn1">
          배송 접수하기
        </button>
      </li>
      <li @click="loginTrack"><button class="btn1">배송 조회하기</button></li>
    </ul>

      <div v-if="!isLogined">
        <br>
        <span >이용을 원하시면 로그인해 주세요 😀</span>
        <br>
        <a href="/user/signin">
          <button class="userbtn">
            이용하기 위해 로그인하기!
          </button>
        </a>
        <br>
        <a href="/user/signup">
          <button class="userbtn">
            이용하기 위해 회원가입하기!
          </button>
        </a>
        <br>
        <button class="test" @click="test">
          테스트
        </button>
      </div>
    </div>

    <div v-if="isLogined">
      <br>
      <div v-if="isLogined" >{{userName}}님 반갑습니다 😀</div>
      <a v-if="isLogined" @click="logout"><button class="userbtn">로그아웃</button></a>
      <div v-if="false">{{userPhoneNumber}}</div>
      <br>
    </div>

  </div>
</template>;

<script>
export default {
  data() {
    return {
      isLogined: '',
      userName: '',
      userPhoneNumber: ''
    }
  },
  created() {
    this.$axios.defaults.withCredentials = true
    this.$axios.get('/user/checklogin').then(result => {
      if (result.data) {
        this.isLogined = true
      } else {
        this.isLogined = false
      }
    });
  },
  mounted() {
    this.$axios.get('/user/session').then(result => {
            this.userName = result.data.name
            this.userPhoneNumber = result.data.phoneNumber
        });
  },
  methods: {
    async logout() {
      this.$axios.defaults.withCredentials = true
      await this.$axios.post('/user/signout')
      .then(function (res) {
        if (res.data) {
          alert('로그아웃 되었습니다.');
          $nuxt.$router.go();
        } else {
          console.log('로그아웃 실패')
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    async loginOrder() {
      this.$axios.defaults.withCredentials = true
      let isLogined = await this.$axios.get('/user/checklogin');
      if (isLogined.data) {
        $nuxt.$router.push('/delivery/order');
      } else {
        alert('로그인이 필요합니다.');
      }
    },
    async loginTrack() {
      this.$axios.defaults.withCredentials = true
      let isLogined = await this.$axios.get('/user/checklogin');
      if (isLogined.data) {
        $nuxt.$router.push(`/delivery/list/${this.userPhoneNumber}`);
      } else {
        alert('로그인이 필요합니다.');
      }
    },
    async test() {
      try {
        this.$axios.get('/control/test');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style>
.index {
  background-color: rgba(225, 225, 225, 1);
  padding-bottom: 300px;
}

.btn1 {
  margin: 9px;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #F0D264;
  box-shadow: 0 6px rgba(196, 172, 83, .7);
  text-decoration: none;
  border-width: 0px;
}

.btn1:hover {
  box-shadow: 0 0; 
  margin-top: 15px;
  background-color: #D6BB59;}

.userbtn {
    background-color: white;
    border-width: 1px;
    padding: 7px 12px;
    margin: 4px;
}

</style>


