<template>
  <div class="header">
    <a href="/"><button>ERIC-A 메인으로</button></a>
    <a v-if="isLogined" @click="logout"><button>로그아웃</button></a>
    <!-- <br>
    <a v-if="!isLogined" href="/user/signin">
      로그인
    </a>
    <a v-if="!isLogined" href="/user/signup">
      회원가입
    </a> -->
    <!-- 로그인 정보: {{userName}}, {{userPhoneNumber}} -->
  </div>
</template>;

<script>
export default {
    data() {
        return {
            isLogined: false,
            userName: null,
            userPhoneNumber: null,
        }
    },
    created() {
        this.$axios.defaults.withCredentials = true
        this.$axios.get('/admin/checklogin', false).then(result => {
            if (result.data) {
                this.isLogined = true
            } else {
                this.isLogined = false
                alert('관리자 로그인이 필요한 서비스입니다!');
                $nuxt.$router.push('/admin');
            }
        this.$axios.get('/admin/session').then(result => {
            this.userName = result.data.name
            this.userPhoneNumber = result.data.phoneNumber
        });

        });
    },
    methods: {
        async logout() {
            this.$axios.defaults.withCredentials = true
            await this.$axios.post('/user/signout')
                .then(function (res) {
                    if (res.data) {
                        alert('로그아웃 되었습니다.');
                        $nuxt.$router.push('/');
                    } else {
                    }
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }
}
</script>
<style>
.header button {
    margin: 10px 5px;
}

.header {
    border-bottom: 2px solid rgb(100, 100, 100);
    padding-bottom: 3px;
    margin: 3px 10px;
}
</style>