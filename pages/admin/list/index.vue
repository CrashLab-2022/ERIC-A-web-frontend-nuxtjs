<template>
    <div class="list">
        <AdminHeader />
        <h3>접수 완료 목록</h3>
        <table>
            <thead>
            <th v-for ="index in deliveryHeader" v-bind:key="index">{{ index }}</th>
        </thead>
        <tbody>
            <tr v-for ="line in deliveryList" v-bind:key="line" > 
            <td v-for ="d in line" v-bind:key="d" @click="viewDetail($event, line.id, line.phoneNumber)">{{ d }}</td>
            </tr>
        </tbody>
        </table>
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
            deliveryHeader: ['🤖', '접수번호', '유저 아이디', '배송지', '품목', '상태'],
            deliveryList: [],
            userPhoneNumber: ''
        }
    },
    mounted() {
        this.$axios.get(`admin/list`).then(response => {
            const list = []
            response.data.result.forEach(function (value, index) {
                if (value.isAccepted == '접수 완료') {
                    list.push({
                        index: index + 1,
                        id: value.id,
                        // date: value.date,
                        // time: value.time,
                        // name: value.name,
                        phoneNumber: value.phoneNumber,
                        destination: value.destination,
                        item: value.item,
                        // isInPerson: value.isInPerson,
                        // isAccepted: value.isAccepted,
                        status: value.status
                    });                    
                }
                });
            this.deliveryList = list  
            this.userPhoneNumber = this.userPhoneNumber     
        });
    },
    methods: {
        viewDetail(ev, id, phoneNumber) {
            $nuxt.$router.push('/admin/requestlist/detail?phoneNumber=' + phoneNumber + "&id=" + id)
        }
    }
};
</script>

<style>
.list table{
    font-size: 13px;
    width: 86%;
    margin-top: 10px;
    /* background-color: rgb(0, 0, 0); */
}
/* tanle th{
    padding : 15px;
    border-bottom: 2px solid  darkgray;
} */
.list table td{
    padding : 0;
    margin: 0;
}
.list table tr{
    /* background-color: rgba(131, 181, 222, 0.5); */
    border: 10px solid rgb(0, 0, 0, 1);
    /* margin: 10px; */
    height: 35px;
    /* padding: 0; */
}

</style>
