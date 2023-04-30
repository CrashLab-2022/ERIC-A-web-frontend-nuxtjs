# ERIC-A-web-frontend

실내 자율주행 배송 로봇 ERIC-A의 웹 애플리케이션

## 프로젝트 설치 및 실행

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## 사용 기술

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white">
<img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=Nuxt.js&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">



## 주요 기능

### 사용자 페이지

- 로그인, 회원가입
- 배송 접수하기
- 배송 조회하기
- 배송 상세 조회하기
  - 접수 요청 - 접수지로 출발 - 접수지 도착 - 배송 출발 - 배송지 도착 - 배송 완료
- 직접 수령인 경우, 배송지에 도착하면 뚜껑 열기

### 관리자 페이지
- 로그인, 회원가입
- 접수 요청 수락/거절하기
- 배송 조회하기
  - 접수 요청 - 접수지로 출발 - 접수지 도착 - 배송 출발 - 배송지 도착 - 배송 완료

## 화면 구성

### 사용자 페이지

| 메인 | 회원가입 | 로그인 |
|---|---|---|
| <img width="250" alt="유저메인" src="https://user-images.githubusercontent.com/68257716/235355476-9d8c8d9c-bd69-457f-8265-56b407d056d6.png"> |  <img width="250" alt="회원가입" src="https://user-images.githubusercontent.com/68257716/235359581-4b76745c-eab2-40e2-8727-ec1ade62ff02.png"> | <img width="250" alt="로그인" src="https://user-images.githubusercontent.com/68257716/235359628-089c43ce-ff90-48c6-b66b-2aa7328971e7.png"> |

| 배송 접수 | 배송 접수 조회 | 배송 상세 조회 - 배송지 도착 |
|---|---|---|
|<img width="250" alt="접수" src="https://user-images.githubusercontent.com/68257716/235359793-06c30407-9182-499a-9a59-3073541ee271.png">|<img width="250" alt="접수조회" src="https://user-images.githubusercontent.com/68257716/235359819-e61eddfc-8a97-4a8b-b609-05ce3877cfdb.png">|<img width="250" alt="배송상세조회-배송지도착" src="https://user-images.githubusercontent.com/68257716/235359825-a2f6263b-b756-4631-97c8-b95b19992d98.png">|

### 관리자 페이지

| 메인 | 접수 요청 목록 | 접수 상세보기(수락/거절) |
|---|---|---|
|<img width="250" alt="관리자메인" src="https://user-images.githubusercontent.com/68257716/235360079-4c0ca6a4-5368-4024-b149-c409bc980d86.png">| <img width="250" alt="접수요청목록" src="https://user-images.githubusercontent.com/68257716/235360097-f82e6509-9fa1-4930-9de8-f2c4a98a81ab.png"> | <img width="250" alt="접수상세조회-접수요청" src="https://user-images.githubusercontent.com/68257716/235360103-d42b6bb2-4883-4164-bc69-2207c116e9f4.png"> |

 
## 사용 흐름

<img width="523" alt="209927234-fd644c19-fefb-4b4a-8ae4-0bc33c15ecf4" src="https://user-images.githubusercontent.com/68257716/235360686-be5867cc-4d57-4346-bca0-ed8e4ca78df8.png">

