-eng---------------------------------------------------------------------------------------------------------------------------
# 🛋️ ReLife - AI-Powered Interior Simulation Service (Full-stack application)
<br><br>
## 📌 Overview
ReLife is a full-stack application that converts room images into interior simulations using AI-powered image generation and 360° VR visualization.

- Custom interior generation based on theme, room type, and color
- Panorama stitching + immersive 360° view
- User preference-based result recommendation
<br><br>

# Architecture

![image](https://github.com/user-attachments/assets/d87800f2-8df6-4512-9da0-579f7ec79ed8)
![real ReLife Flow](https://github.com/user-attachments/assets/3754fcc4-1024-43e1-911b-976e3a2fadde)
<br><br>

# UI Screen

![image](https://github.com/user-attachments/assets/24fe399d-2b4c-414b-aa32-c604a8304fbd)
<br><br>

## 🧠 Key Features
- External AI API integration via Webhook (REimagineHome API)
- Redis-based job tracking and user session management
- Client-side polling mechanism to retrieve image results
- User preference analysis logic for personalized recommendations
- Panorama-to-VR view rendering with Three.js

<br><br>

## 🔨 Implementation Highlights

* ### 📤 Single/Multi Image Processing Logic
* [View Code](https://github.com/ryung0519/ReLife-Next.js/tree/master/src/app/api)
* (Solid lines: all cases, Dashed lines: 2 or more images uploaded)

![relife real api flow](https://github.com/user-attachments/assets/8c36af1d-5378-4cc8-a5ca-2eb0f68a04fe)

----

* ### 🔁 Retry Logic for Failed Conversions
* [View Code](https://github.com/ryung0519/ReLife-Next.js/blob/master/src/app/api/retry/route.js)
* (Solid lines: all cases, Dashed lines: 2 or more images uploaded)
 
![relife retry](https://github.com/user-attachments/assets/f995c1ca-4e08-492f-8377-952fd144d748)

----

### 📂 User Job Tracking with Redis (Vercel KV)
* [View Code](https://github.com/ryung0519/ReLife-Next.js/blob/master/src/app/api/function/kvRedis.js)
* Collaborated on Redis-based job state tracking to optimize frequent read/write operations.
* Redis Hash structure was used for structured and efficient session data access.
* (Implementation led by teammate;)
 
```
// jobId → cookie mapping

{jobId} : {
    cookie : {cookie},
    type : {type}
}


// cookie → user job info

{cookie} : {
    prompt : {prompt},
    spaceType : {spaceType},
    designType : {designType},
    maskUrl : [{maskUrl}],
    generateUrl : {generateUrl}
}
```
<br><br>
## 🛠️ Tech Stack
| Category | Tools |
|----------|-------|
| Frontend | Next.js, React, Three.js |
| Backend | Node.js, Nginx, Webhook |
| Infra | AWS EC2, S3, Redis (Vercel KV) |
| Others | Git, GitHub, REST API, External AI API |

## 👩🏻‍💻 My Contributions
- Participated in full-stack development including parts of frontend and backend features
- Implemented part of the AI API integration
- Independently developed the user preference analysis logic
- Authored technical documentation and served as the first author of the academic paper


## 🏆 Achievements
- 🏆 Bronze Award at 2024 KDCS Summer Conference (Korea Digital Contents Society) for Undergraduate Research Paper Presentation
- [View Paper (korean)](https://github.com/ryung0519/ReLife-Next.js/blob/master/2024%20%EB%85%84%EB%8F%84%20%ED%95%9C%EA%B5%AD%EB%94%94%EC%A7%80%ED%84%B8%EC%BD%98%ED%85%90%EC%B8%A0%ED%95%99%ED%9A%8C%20%ED%95%98%EA%B3%84%ED%95%99%EC%88%A0%EB%8C%80%ED%9A%8C%20%EB%85%BC%EB%AC%B8.pdf)

<br><br><br>
-kr---------------------------------------------------------------------------------------------------------------------------
# 🛋️ ReLife - AI 기반 인테리어 시뮬레이션 서비스 (Full-stack Application)

<br><br>
## 📌 개요
ReLife는 사용자의 방 이미지를 받아, AI 기반 이미지 변환과 360° VR 뷰를 통해 인테리어를 간접 체험할 수 있는 풀스택 인테리어 시뮬레이션 웹 서비스입니다.

- 테마, 공간 유형, 색상 기반 맞춤 인테리어 이미지 제공  
- 다중 이미지 파노라마 연결 및 360도 VR 시각화  
- 사용자 취향 기반 추천 결과 도출  
<br><br>

## 🏗️ 아키텍처

![image](https://github.com/user-attachments/assets/d87800f2-8df6-4512-9da0-579f7ec79ed8)  
![real ReLife Flow](https://github.com/user-attachments/assets/3754fcc4-1024-43e1-911b-976e3a2fadde)  
<br><br>

## 🖼️ UI 화면

![image](https://github.com/user-attachments/assets/24fe399d-2b4c-414b-aa32-c604a8304fbd)  
<br><br>

## 🧠 주요 기능
- 외부 이미지 변환 AI API(REimagineHome) Webhook 연동  
- Redis 기반 사용자 세션 및 작업 상태 관리  
- 클라이언트 Polling 방식 이미지 결과 수신  
- 사용자 취향 분석 알고리즘으로 결과 커스터마이징  
- Three.js를 활용한 360° VR View 렌더링  
<br><br>

## 🔨 주요 구현 내용

### 📤 단일/다중 이미지 처리 로직  
[코드 보기](https://github.com/yangsp31/ReLife-Next.js/tree/master/src/app/api)  
- 실선: 모든 경우  
- 점선: 이미지 2장 이상 업로드 시  

![relife real api flow](https://github.com/user-attachments/assets/8c36af1d-5378-4cc8-a5ca-2eb0f68a04fe)

---

### 🔁 이미지 변환 실패 재시도 로직  
[코드 보기](https://github.com/yangsp31/ReLife-Next.js/blob/master/src/app/api/retry/route.js)  
- 실선: 모든 경우  
- 점선: 이미지 2장 이상 업로드 시  

![relife retry](https://github.com/user-attachments/assets/f995c1ca-4e08-492f-8377-952fd144d748)

---

### 📂 Redis (Vercel KV) 기반 작업 정보 관리  
[코드 보기](https://github.com/yangsp31/ReLife-Next.js/blob/master/src/app/api/function/kvRedis.js)  
- 팀원과 협업하여 Redis 기반 상태 추적 구조 설계  
- 구조화된 세션 정보 접근을 위한 Redis Hash 활용  
- *본 구현은 팀원이 주도*

// jobId → cookie 매핑

{jobId} : {
    cookie : {cookie},
    type : {type}
}

// cookie → 사용자 작업 정보

{cookie} : {
    prompt : {prompt},
    spaceType : {spaceType},
    designType : {designType},
    maskUrl : [{maskUrl}],
    generateUrl : {generateUrl}
}
<br><br>

## 🛠️ 기술 스택
| 구분       | 도구 |
|------------|------|
| 프론트엔드 | Next.js, React, Three.js |
| 백엔드     | Node.js, Nginx, Webhook |
| 인프라     | AWS EC2, S3, Redis (Vercel KV) |
| 기타       | Git, GitHub, REST API, 외부 AI API |

## 👩🏻‍💻 나의 기여
- 프론트엔드와 백엔드 일부 기능 구현 등 풀스택 개발 참여
- AI API 연동 기능 일부 구현
- 사용자 취향 분석 기능 단독 개발
- 기술 문서 작성 및 학술 논문 제 1저자 

## 🏆 수상 내역
- 🥉 2024 한국디지털콘텐츠학회(KDCS) 하계 종합 학술대회 대학생 논문 경진대회 동상 수상
- [눈문 보기](https://github.com/ryung0519/ReLife-Next.js/blob/master/2024%20%EB%85%84%EB%8F%84%20%ED%95%9C%EA%B5%AD%EB%94%94%EC%A7%80%ED%84%B8%EC%BD%98%ED%85%90%EC%B8%A0%ED%95%99%ED%9A%8C%20%ED%95%98%EA%B3%84%ED%95%99%EC%88%A0%EB%8C%80%ED%9A%8C%20%EB%85%BC%EB%AC%B8.pdf)
