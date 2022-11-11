<template>
  <div>
    <h1>ERIC-A</h1>
    <div>
      배송 로봇 ERIC-A입니다!
      <a v-if="!isLogined" href="/user/signin">사용하기 위해 로그인하기!</a>
      <a v-if="!isLogined" href="/user/signup">사용하기 위해 회원가입하기!</a>
    </div>
      <div v-if="isLogined" >{{userName}}님 반갑습니다</div>
      <div v-if="false">{{userPhoneNumber}}</div>
    <ul>
      <li @click="loginOrder">배송 접수</li>
      <li @click="loginTrack">배송 현황</li>
    </ul>
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
      console.log(result.data);
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
  }
}
</script>


