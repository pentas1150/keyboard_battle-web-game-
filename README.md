# 단어 빨리 치기 게임(끄투(?))
Project URL: https://github.com/pentas1150/keyboard_battle-web-game-

# Introduction
일반적인 단어 빨리 치기가 아임미다.
쀍쏗얋춽 같은 이상한 단어를 빨리 치는 게임니다 ㅋㅋㅋㅋ

# Using Tools
- [Express](https://expressjs.com/): 웹 프레임워크
- [Socket.io](https://socket.io/): 웹 소켓

# Results
### Screeshots
- 게임 진행 중
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMjQg/MDAxNTk5MDI2Mzc2Mjk1.2H3Do7pPxBD9yECJQxXs-Guy3jLbP-jz685F0EnCF78g.e5POwQr9cP9ZNT3rUD3Lf1JufE-7mZQreMCtCwvBWZwg.PNG.ffanys_/스크린샷_2020-09-02_오후_2.58.29.png?type=w966" width="600px">

- 누군가 맞추면 입력창을 막음.
<img src="https://postfiles.pstatic.net/MjAyMDA5MDJfMjYy/MDAxNTk5MDI2NDk4MzUw.fGpAFOhdEBZtBN0IfyYLBVDdcBqm81fjxYRA42HjJp8g._lMgEBbZfj8c7H64MvOdg6TjpnS0_TGr-_HbbSyvjuYg.PNG.ffanys_/SE-0cbec019-e713-4b83-a939-abc3c8bea4e1.png?type=w966" width="600px">

# How to Use
- .env 파일 생성 후 아래의 변수명 기입
  - COOKIE : 쿠키의 시크릿 키
  - DOMAIN : 도메인명(or IP) ex)192.168.0.23

### Notes
1. Socket.io로 실시간으로 게임이 진행됨.

2. 빈약한 로직이지만 누가 빨리 쳤는지도 판단함.
