<template>
    <div class="list">
        <h3>접수 목록</h3>
        <table>
            <thead>
            <th v-for ="index in deliveryHeader" v-bind:key="index">{{ index }}</th>
        </thead>
        <tbody>
            <tr v-for ="line in deliveryList" v-bind:key="line" > 
            <td v-for ="d in line" v-bind:key="d" @click="viewDetail($event, line.id)">{{ d }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deliveryHeader: ['😀', '접수번호', '접수일자', '이름', '품목', '현재 상태'],
            deliveryList: []
        }
    },
    mounted() {

        this.$axios.get(`admin/list`).then(result => {
            console.log(result)
            const list = []
            result.data.forEach(function (value, index) {
                list.push({
                    index: index + 1,
                    id: value.id,
                    date: value.date,
                    // time: value.time,
                    name: value.name,
                    // phoneNumber: value.phoneNumber,
                    // destination: value.destination,
                    item: value.item,
                    // isInPerson: value.isInPerson,
                    status: value.status
                });
            });
            this.deliveryList = list        
        });
    },
    methods: {

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
