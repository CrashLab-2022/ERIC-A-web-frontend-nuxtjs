<template>
    <div class="container">
        <Header />
        <h3>배송 상세 조회하기</h3>
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
        <!-- {{ status }} -->
        <p v-if="this.status == '배송 완료'">배송이 완료되었어요! <br></p>
        <button v-else-if="this.status == '도착'" @click="opendoor">뚜껑 열기</button>
        <p v-else>도착하면 뚜껑 열기 버튼이 생깁니다.<br>조금만 기다려 주세요!</p>
    </div>
    </div>
</template>

<script>
import Header from '../../components/Header';
export default {
    components: {
        Header
    },
    data() {
        return {
            name: null,
            phoneNumber: this.$route.query.phoneNumber,
            index: this.$route.query.index,
            userPhoneNumber: null,
            deliveryHeader: ['접수번호', '접수일자', '접수시간', '수령인', '전화번호', '배송지', '품목', '수령 방법', '현재 상태'],
            deliveryList: [],
            status: 'hello'
        }
    },
    mounted() {

        this.$axios.get('/user/session').then(result => {
            this.name = result.data.name
            this.userPhoneNumber = result.data.phoneNumber
            if (this.phoneNumber != this.userPhoneNumber) {
                alert('잘못된 접근입니다.')
                this.$router.push('/');
            }
        });
        
        this.$axios.get(`delivery/list/${this.phoneNumber}`).then(result => {
            let list = []
                    console.log($nuxt.$route.query.id)

            result.data.forEach(function (value, index) {
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
                        status: value.status
                    });
                }
            });
            this.deliveryList = list     
            this.status = list[0]["status"]
        });
    },
    methods: { opendoor() {
        this.$axios.get('/control/opendoor').then(function (res) {
            console.log(res);
            if (res.status == 200) {
                alert('뚜껑을 열게요!');
            } else {
                alert('실패했습니다.');
            }
        }).catch(function (err) {
            alert('오류가 발생했습니다.');
            console.log(err);
        });
    }
    }
};
</script>

<style>
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
    
</style>
