<template>
    <div class="signup">
        <Header />
        <h3>회원가입</h3>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="phoneNumber">전화번호</label>
                <input type="text" id="phoneNumber" v-model="phoneNumber" maxlength="11" placeholder="-를 제외하고 입력해 주세요."/><br>
                {{ checkPhoneNumberText }}<br>
                    <button @click.self.prevent="checkPhoneNumber" class="checkPN">전화번호 중복체크</button>
            </div>
            <div>
                <label for="password">비밀번호</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <div>
                <label for="passwordConfirm">비밀번호 확인</label>
                <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
            </div>
            <div> {{isPasswordEqualText()}}
            </div>
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script>
import Header from '../../components/Header2';
export default {
    components: {
        Header
    },
    name: 'SignupForm',
    data() {
        return {
            name: null,
            phoneNumber: null,
            password: '',
            passwordConfirm: '',
            checkPhoneNumberText: '전화번호 중복체크 미완료'
        };
    },
    watch: {
        phoneNumber: function () {
            return this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
        }
    },
    methods: {
        async checkPhoneNumber() {
            try {
                if (this.phoneNumber == null) {
                    alert('전화번호를 입력해 주세요.');
                    return 0;
                }
                let response = await this.$axios.get(`user/signup/checkphone/${this.phoneNumber}`)
                if (response.data.res == true) {
                    alert('사용 가능한 전화번호입니다.');
                    this.checkPhoneNumberText = '전화번호 중복체크 완료'
                    return 1;
                    } else {
                    alert('이미 사용 중인 전화번호입니다.');
                    return 0;
                    }
            } catch(err) {
                console.log(err)
            }
        },
        async isPhoneNumberAvailable() {
            try {
                let response = await this.$axios.get(`user/signup/checkphone/${this.phoneNumber}`);
                if (response.data.res == true) {
                    return 1;
                    } else {
                    return 0;
                    }
            } catch (err) {
                console.log(err)
            }
        },
        isPasswordEqual() {
            if ((this.password.length == 0 && this.passwordConfirm.length == 0)) {
                return 0;
            }
            else if (this.password == this.passwordConfirm) {
                return 1;
            } else {
                return -1;
            }
        },
        isPasswordEqualText() {
            let isEqual = this.isPasswordEqual();
            if (isEqual == 0) {
                return '비밀번호를 입력해 주세요.'
            } else if (isEqual== 1) {
                return '비밀번호가 일치합니다.'
            } else {
                return '비밀번호가 일치하지 않습니다.'
            }
        },
        async submitForm() {
            const userData = {
                name: this.name,
                phoneNumber: this.phoneNumber,
                password: this.password,
            };
            if (this.isPasswordEqual() == 1 && await this.isPhoneNumberAvailable() == 1) {
                this.$axios.defaults.withCredentials = true
                this.$axios.post('/admin/signup', userData)
                .then(function (res) {
                    if (res.status == 200) {
                        alert('회원 가입 완료되었습니다.');
                        $nuxt.$router.push('/admin');
                    }
                    else {
                        alert('회원 가입 실패하였습니다.');
                    }
                }).catch(function (err) {
                    alert('비어있는 칸이 있는지 확인해 주세요.');
                    console.log(err);
                });
            } else if (this.isPasswordEqual() != 1) {
                alert('비밀번호를 확인해 주세요.');
            } else if (await this.isPhoneNumberAvailable() != 1) {
                alert('전화번호를 확인해 주세요.')
            }
        },
    },
};
</script>

<style scoped>

.signup label {
    display: inline-block;
    width: 100px;
}

.signup input {
    width: 190px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  margin: 5px;
  margin-left: 7px;
  outline: none;
  padding: 5px;
  background-color: rgb(255, 255, 255);
}

.signup h3 {
    margin-bottom: 10px;
}

.signup button {
  margin: 10px;
  margin-bottom: 15px;
  margin-top: 7px;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #F0D264;
  box-shadow: 0 6px rgba(196, 172, 83, .7);
  text-decoration: none;
  border-width: 0px;
}

.signup button:hover {
  box-shadow: 0 0; 
  margin-top: 15px;
  background-color: #D6BB59;
}

</style>
