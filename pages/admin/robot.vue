<template>
    <div class="robot">
        <h3>로봇 관리</h3>
    <div>
      <div class="menu">
        메뉴
      </div>
    <ul>
      <li @click="open">
        <button class="btn1">
          열기
        </button>
      </li>
      <li @click="close"><button class="btn1">닫기</button></li>
    </ul>
    </div>
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
    methods: {
      async open() {
        this.$axios.get(`/control/opendoor`).then(function (res) {
            console.log(res);
            if (res.data) {
                alert('뚜껑을 열게요!');
            } else {
                alert('뚜껑이 이미 열리고 있어요.');
            }
        }).catch(function (err) {
            alert('오류가 발생했습니다.');
            console.log(err);
        });
      },
      async close() {
        console.log('close');
      }
    }
};
</script>

<style>

.btn1 {
  margin: 9px;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
  background-color: #F0D264;
  box-shadow: 0 6px rgba(196, 172, 83, .7);
  text-decoration: none;
  border-width: 0px;
}

.btn1:hover {
  box-shadow: 0 0; 
  margin-top: 15px;
  background-color: #D6BB59;}

.userbtn {
    background-color: white;
    border-width: 1px;
    padding: 7px 12px;
    margin: 4px;
}


</style>
