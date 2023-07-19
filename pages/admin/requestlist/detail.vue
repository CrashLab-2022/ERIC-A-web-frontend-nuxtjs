<template>
    <div class="container">
        <AdminHeader />
        <h3>접수 요청 상세보기</h3>
        <div>
            <!-- {{ name }}님의 접수 내역 -->
        </div>
        <table id="info">
        <thead>
                <tr v-for ="index in deliveryHeader" v-bind:key="index"><th>{{index}}</th></tr>
        </thead>
        <tbody>
            <!-- <tr v-for ="line in deliveryList" v-bind:key="line"> -->
            <!-- <tr v-for ="d in deliveryList" v-bind:key="d"><td>{{d.name}}</td></tr> -->
            <tr v-for ="d in deliveryList[0]" v-bind:key="d"><td>{{d}}</td></tr>
            <!-- </tr> -->
        </tbody>
    </table>
    <div id="info">
        <br>
        <div v-if="this.status == '접수지로 출발'">접수가 완료되어 접수지로 이동중입니다.</div>
        <div v-else-if="this.status == '접수지 도착'">접수지에 도착했습니다.
         <div class="btns">
                <ul>
                    <li @click="open"><button class="btn1">열기</button></li>
                    <li @click="close"><button class="btn1">닫기</button></li>
                    <li @click="start"><button class="btn1">출발</button></li>
                </ul>
            </div></div>
        <div v-else-if="this.status == '접수 거부'">접수 거부되었습니다.</div>
        <div v-else-if="this.status == '배송지 도착'">배송지에 도착했습니다.</div>
        <div v-else-if="this.status == '배송 완료'">배송 완료되었습니다.</div>
        <div v-else-if="this.status == '배송 출발'">배송 출발하였습니다.</div>
        <div v-else><ul class="btns">
      <li @click="accept"><button class="btn1">접수 수락</button></li>
      <li @click="refuse"><button class="btn1">접수 거절</button></li>
    </ul></div>
    </div>
    </div>
</template>

<script>
import AdminHeader from '../../../components/AdminHeader.vue';
export default {
    components: {
          AdminHeader
      },
    data() {
        return {
            name: null,
            phoneNumber: this.$route.query.phoneNumber,
            index: this.$route.query.index,
            userPhoneNumber: null,
            deliveryHeader: ['접수번호', '접수일자', '접수시간', '수령인', '전화번호', '배송지', '품목', '수령 방법', '접수 상태', '현재 상태'],
            deliveryList: [],
            status: 'status',
            isAccepted: 'isAccepted'
        }
    },
    created() {

        // this.$axios.get('/user/session').then(result => {
        //     this.name = result.data.name
        //     this.userPhoneNumber = result.data.phoneNumber
        //     if (this.phoneNumber != this.userPhoneNumber) {
        //         alert('잘못된 접근입니다.')
        //         this.$router.push('/');
        //     }
        // });
        
        let list = []
        this.$axios.get(`delivery/list/${this.phoneNumber}`).then(response => {
            response.data.result.forEach(function (value, index) {
                if (value.id == $nuxt.$route.query.id) {
                    list.push({
                        // index: index + 1,
                        id: value.id,
                        date: value.date,
                        time: value.time,
                        name: value.name,
                        phoneNumber: value.phoneNumber,
                        destination: value.destination,
                        item: value.item,
                        isInPerson: value.isInPerson,
                        isAccepted: value.isAccepted,
                        status: value.status
                    });
                }
            });
            this.deliveryList = list     
            this.status = list[0]["status"]
            this.isAccepted = list[0]["isAccepted"]
        });
    },
    methods: {
        accept() {
            this.$axios.post(`/control/accept/${this.deliveryList[0].id}`).then(function (res) {
                if (res.data) {
                    alert('접수를 수락했습니다.');
                } else {
                    alert('서버에서 오류가 발생했습니다.');
                }
            }).catch(function (err) {
                alert('오류가 발생했습니다.');
                console.log(err);
            });
        }, refuse() {
            this.$axios.post(`/control/refuse/${this.deliveryList[0].id}`).then(function (res) {
                if (res.data) {
                    alert('접수를 거절했습니다.');
                } else {
                    alert('서버에서 오류가 발생했습니다.');
                }
            }).catch(function (err) {
                alert('오류가 발생했습니다.');
                console.log(err);
            });
        }, open() {
            this.$axios.get(`/control/adminopen`).then(function (res) {
                if (res.data) {
                    alert('뚜껑을 엽니다.');
                } else {
                    alert('서버에서 오류가 발생했습니다.');
                }
            }).catch(function (err) {
                alert('오류가 발생했습니다.');
                console.log(err);
            });
        }, close() {
            this.$axios.get(`/control/adminclose`).then(function (res) {
                if (res.data) {
                    alert('뚜껑을 닫습니다.');
                } else {
                    alert('서버에서 오류가 발생했습니다.');
                }
            }).catch(function (err) {
                alert('오류가 발생했습니다.');
                console.log(err);
            });
        }, start() {
            this.$axios.get(`/control/adminstart/${this.deliveryList[0].id}`).then(function (res) {
                if (res.data) {
                    alert('배송을 시작합니다.');
                } else {
                    alert('서버에서 오류가 발생했습니다.');
                }
            }).catch(function (err) {
                alert('오류가 발생했습니다.');
                console.log(err);
            }); 
        }
    }
};
</script>

<style scoped>
    thead, tbody{
        display:inline-block;
    }
    th, tr, td {
        height: 36px;
        width: 150px;
    }
    /* th:nth-of-type(odd) {
        background-color: white;
        height: 36px;
    }
    th:nth-of-type(even) {
        background-color: rgba(131, 181, 222, 0.5);
        height: 36px;
    } */
    table tr:nth-of-type(odd){
        background-color: rgba(131, 181, 222, 0.5);
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
        display: inline-block;
    }

    .btn1:hover {
        box-shadow: 0 0; 
        margin-top: 15px;
        background-color: #D6BB59;
    }

    .btns {
        text-align: center;
    }

    li {
        display: inline-block;
    }

</style>
