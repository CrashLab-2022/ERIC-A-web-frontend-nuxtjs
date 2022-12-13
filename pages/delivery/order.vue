<template>
    <div class="order">
        <Header />
        <h3>배송 접수하기</h3>
        <form @submit.prevent="submitForm">
            <div v-if="false">
                <label for="userPhoneNumber">접수자 전화번호</label>
                {{ userPhoneNumber }}
            </div>
            <div class="toggle">
                <span>나에게 보내기</span>
                <label class="toggler-wrapper style-1">
                <input type="checkbox" @click="checkToMe" v-model="checks" value="1">
                <div class="toggler-slider">
                <div class="toggler-knob"></div>
                </div>
                </label>
            </div>
            <div>
                <label for="name">수령인</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="phoneNumber">전화번호</label>
                <input type="text" id="phoneNumber" v-model="phoneNumber" maxlength="11" placeholder="'-'를 제외하고 입력해 주세요."/>
            </div>
            <div>
                <label for="destination">배송지</label>
                <input type="text" id="destination" v-model="destination" maxlength="11" placeholder="숫자와 '-'만 입력해 주세요."/>
            </div>
            <div>
                <label for="item">상품</label>
                <select name = "item" id="item" v-model="item">
                    <option value="마카롱">마카롱</option>
                    <option value="케이크">케이크</option>
                    <option value="도넛">도넛</option>
                    <option value="베이글">베이글</option>
                </select>
            </div>
            <div>
                <label for="isInPerson">수령 방법</label>
                <select name = "isInPerson" id="isInPerson" v-model="isInPerson">
                    <option value="1">직접 수령하기</option>
                    <option value="2">두고 가기</option>
                </select>
            </div>
            <button type="submit">접수</button>
        </form>
    </div>
</template>

<script>
import Header from '../../components/Header';
export default {
    components: {
        Header
    },
    mounted() {
        this.$axios.get('/user/session').then(result => {
            console.log(result.data)
            this.userPhoneNumber = result.data.phoneNumber
        });
    },
    data() {
        return {
            userPhoneNumber: null,
            name: null,
            phoneNumber: null,
            destination: null,
            item: '마카롱',
            isInPerson: '1',
            checks: []
        };
    },
    watch: {
        phoneNumber: function () {
            return this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
        },
        destination: function () {
            return this.destination = this.destination.replace(/[^0-9-]/g, '');
        }
    },
    methods: {
        async checkToMe() {
            if (this.checks.length == 0) {
                let isLogined = await this.$axios.get('/user/session');
                this.name = isLogined.data.name;
                this.phoneNumber = isLogined.data.phoneNumber;
            } else {
                this.name = '';
                this.phoneNumber = '';
            }
        },
        submitForm() {
            const userData = {
                name: this.name,
                phoneNumber: this.phoneNumber,
                departure: '101',
                destination: this.destination,
                item: this.item,
                isInPerson: this.isInPerson,
                userId: this.userPhoneNumber,
                status: '접수 중',
                isAccepted: '접수 요청'
            };
            this.$axios.post('/delivery/order', userData)
            .then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    alert('접수되었습니다.');
                    $nuxt.$router.push(`/delivery/list/${userData.userId}`)
                }
                else {
                    alert('접수 실패하였습니다.');
                }
            }).catch(function (err) {
                alert('비어있는 칸이 있는지 확인해 주세요.');
                console.log(err);
            });
        },
    },
};
</script>

<style scoped>

label {
    display: inline-block;
    width: 70px;
}

.order button {
  margin: 15px;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #F0D264;
  box-shadow: 0 6px rgba(196, 172, 83, .7);
  text-decoration: none;
  border-width: 0px;
}

.toggle {
    display: flex;
    align-items: center;
    justify-content: center;
}

.order button:hover {
  box-shadow: 0 0; 
  margin-top: 20px;
  background-color: #D6BB59;}

.toggler-wrapper {
  display: block;
  width: 45px;
  height: 25px;
  cursor: pointer;
  position: relative;
  align-items: center;
  /* margin: auto; */
}

.toggler-wrapper input[type="checkbox"] {
  display: none;
}

.toggler-wrapper input[type="checkbox"]:checked+.toggler-slider {
  background-color: #F0D264;
}

.toggler-wrapper .toggler-slider {
  background-color: #ccc;
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.toggler-wrapper .toggler-knob {
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

  .toggler-wrapper.style-1 input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
  left: calc(100% - 19px - 3px);
}

.toggler-wrapper.style-1 .toggler-knob {
  width: calc(25px - 6px);
  height: calc(25px - 6px);
  border-radius: 50%;
  left: 3px;
  top: 3px;
  background-color: #fff;
}

span {
    margin: 0 10px;
}

select {
    width: 200px;
    border: 0px solid #ffffff;
    background-color: white;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 5px 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    margin: 5px;
}

select:focus{
    border: 1px solid #F0D264;
    box-sizing: border-box;
    border-radius: 15px;
    outline: 3px solid #eadba7;
    border-radius: 10px;
}

</style>
