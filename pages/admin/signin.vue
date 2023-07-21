<template>
    <div class="login">
        <Header />
        <h3>관리자 로그인</h3>
        <form @submit.prevent="submitForm">
            <div class="id">
                <label for="phoneNumber">전화번호</label>
                <input type="text" id="phoneNumber" v-model="phoneNumber" />
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script>
import Header from '../../components/Header2';
export default {
    components: {
        Header
    },
    name: 'SigninForm',
    data() {
        return {
            phoneNumber: null,
            password: '',
        };
    },
    methods: {
        submitForm() {
            const userData = {
                phoneNumber: this.phoneNumber,
                password: this.password,
            };
            this.$axios.defaults.withCredentials = true
            this.$axios.post('/admin/signin', userData)
                .then(function (res) {
                    if (res.data) {
                        $nuxt.$router.push('/admin');
                    }
                    else {
                        alert('아이디와 비밀번호를 확인해 주세요.');
                    }
                }).catch(function (err) {
                    alert('로그인 오류');
                    console.log(err);
                });
        }
    },
};
</script>

<style scoped>
.login input {
    width: 190px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  margin: 5px;
  margin-top: 10px;
  margin-left: 7px;
  outline: none;
  padding: 5px;
  background-color: rgb(255, 255, 255);
}

.login h3 {
    margin: 20px;
    margin-bottom: 5px;
}

.login button {
  margin: 15px;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #F0D264;
  box-shadow: 0 6px rgba(196, 172, 83, .7);
  text-decoration: none;
  border-width: 0px;
}

.login button:hover {
  box-shadow: 0 0; 
  margin-top: 20px;
  background-color: #D6BB59;}
</style>
