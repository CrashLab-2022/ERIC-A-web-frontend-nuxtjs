<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div>
                <label for="phoneNumber">id</label>
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
export default {
    name: 'SignupForm',
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
            this.$axios.post('/user/signin', userData)
                .then(function (res) {
                    if (res.status == 200) {
                        $nuxt.$router.push('/');
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

<style scoped></style>
