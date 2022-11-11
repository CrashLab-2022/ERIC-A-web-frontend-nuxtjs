<template>
  <div>
    <h1>ERIC-A</h1>
    <div>
      배송 로봇 ERIC-A
      <a v-if="!isLogined" href="/user/signin">사용하기 위해 로그인하기!</a>
      <a v-if="!isLogined" href="/user/signup">사용하기 위해 회원가입하기!</a>
    </div>
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
      isLogined: true
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
        $nuxt.$router.push('/delivery/track');
      } else {
        alert('로그인이 필요합니다.');
      }
    },
  }
}
</script>


