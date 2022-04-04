# 👔 여러분의 옷장을 책임질 ... *Ssafit* ( BigData Project)

#### 빅데이터 기반  개인 맞춤 옷, 코디 추천 플랫폼

![image-20220404120231497](C:\Users\dlrjs\AppData\Roaming\Typora\typora-user-images\image-20220404120231497.png)



## 👪 팀원 소개

##### 정재호 ( Jae Ho Jung )

- **빅데이터 추천, 웹 크롤링 , FastAPI 서버 개발** 
- 🍒 Github : 

##### 정윤정 ( Jeong Yun Jeong )

- **빅데이터 추천, 웹 크롤링 , FastAPI 서버 개발** 
- 🍓 Github : 

##### 이혜진 ( Hye Jin Lee )

- **프론트 엔드 React 개발** 
- 🍇 Github : 

##### 임경훈 ( Kyung Hun Lim )

- **프론트 엔드 React 개발** 
- 🍈 Github : 

##### 김영기 ( Yeong Ki Kim )

- **서비스 아키텍쳐 설계 및 구현, 백엔드 개발** 
- 🍐 Github : 

##### 김창민 ( Chang Min Kim )

- **서비스 아키텍쳐 설계 및 구현, 백엔드 개발** 
- 🍅 Github : 



## 📆 프로젝트 개요

##### ▶ [팀 노션](https://www.notion.so/c1f73b2a71e44dc9a17adcdf82fd8968)     ▶ [마인드맵](https://www.mindmeister.com/map/2198880827?t=BbTDvqBLhA)

#### <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"> <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">



- ##### 진행 기간 : 2022.02.21 ~ 2022.04.08

- ##### 목표 

  - ##### 유저 리뷰 기반의 개인 맞춤 옷, 코디 추천 서비스를 개발합니다.

  - ##### TPO에 맞는 코디를 추천하는 서비스를 사용자에게 제공합니다.

  - ##### 개인의 취향에 맞는 옷을 추천하는 기능을 지원합니다.

- ##### ✏️기획서

  - ##### [기능명세서](https://docs.google.com/spreadsheets/d/1DajUUoxczjtIi0OPYsWq2eqnvQW8JyVJK21xZevCUzE/edit#gid=0)

  - ##### [ERD](https://www.erdcloud.com/d/ZFTtEdaEgRPWyuiR9)

- ##### 🖼 와이어프레임

  - ##### [와이어프레임 확인](https://www.figma.com/file/NCA8xGy6dUQ0tsMohEuxhF/%ED%8A%B9%ED%99%94PJT?node-id=0%3A1)

- ##### 🎬 프로젝트 시연영상

  - 



## 📣 프로젝트 소개

##### 코로나 19 바이러스로 인한 언컨택트 시대를 맞이하여 많은 소비자들이 온라인 쇼핑몰을 이용하여 옷을 구매하고 있습니다.

##### 하지만, 옷의 사이즈가 맞지않거나 취향에 맞지 않아 반품을 하거나 중고거래를 이용하여 불필요한 소비가 빈번하게 발생하고 있습니다. 이러한 구매 패턴이 반복되어 소비자들은 온라인 의류 쇼핑에 대해 큰 불안감을 느끼고 있습니다.

##### 소비자들의 의류 쇼핑에 대한 불안감을 극복할 수 있도록 저희는 빅데이터 리뷰 기반의 개인 맞춤 의류 추천 웹 플랫폼 Ssafit을 개발하였습니다.

##### Ssafit을 이용하는 사용자들은 개인의 키, 몸무게, 나이, 성별을 개인정보로 등록하여 개인 맞춤으로 의류, 코디를 추천받을 수 있습니다. 또한, TPO에 적절한 코디를 추천해줌으로서 상황에 맞게 사용자들이 옷을 구매할 수 있도록 기능을 제공하고 있습니다. 



## ⚡ 주요 기능

#### 소셜 로그인을 통해 간편하게 서비스 이용 가능

> Google, Kakao 소셜 로그인을 이용하여, 간단한 신체정보 입력만으로 Ssafit을 이용할 수 있습니다.

![GoogleLogin](README.assets/GoogleLogin.gif)



#### TPO에 맞는 코디 추천 기능을 제공

> 일상적으로 발생할 수 있는 대표적인 12가지의 상황 별 맞춤 코디 추천.

![TPO](README.assets/TPO.gif)

- ##### TPO 코디 상세 페이지

  > 좋아요, 싫어요 정보를 저장하여 빅데이터 학습에 이용하여 최적의 맞춤 서비스에 이용하고 있습니다.

​		![TPODetail](README.assets/TPODetail.gif)



#### 개인 사이즈 · 취향 맞춤 추천 서비스

> 개인 사이즈 · 취향에 맞는 옷을 추천합니다.

![RECOMMAND](README.assets/RECOMMAND.gif)

- 개인 별 좋아하는 색깔, 카테고리 별로 옷을 추천하는 기능을 제공합니다.

  ![LIKE](README.assets/LIKE.gif)



#### 검색 기능

> 검색 기능을 통해 원하는 옷을 검색할 수 있습니다.

![SEARCH](README.assets/SEARCH.gif)



## ❔ 서비스 아키텍쳐

![image-20220404160149383](C:\Users\dlrjs\AppData\Roaming\Typora\typora-user-images\image-20220404160149383.png)



## ⚙ 설치 및 실행 방법

#### 서비스 아키텍쳐 구조 및 실행 방법

- [인프라 세팅](https://sulky-twig-f46.notion.site/8babd4ecfd4b4671858961605c83125a)
- [Jenkins 세팅](https://sulky-twig-f46.notion.site/Jenkins-c9f033b4bf6e4fc690c2aaf8cb674df6)
- [Nginx 세팅](https://sulky-twig-f46.notion.site/nginx-3999e0f28ae24195a68e20c00dc05e5f)

#### FrontEnd(React)





#### BackEnd(Spring)

```shell
cd backend/backend-java
./gradlew build -Pprofile=prod
◦sudo java -jar -Dspring.profiles.active=prod [생성된 JAR 파일명].jar
```



#### BackEnd(FastAPI-DA)





## 🐤 최종산출물

##### 최종 발표 자료

- 



