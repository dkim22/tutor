// import axios from 'axios'

const instaData = {
  id: 1,
  userId: 'chuta_m1114',
  location: '서울',
  picture: 'https://7art7.com/web/product/big/20200609/1d078859433319d4790368bbf445b132.jpg',
  liked: [{
    id: 2,
    userId: 'jungyeol260'
  },
  {
    id: 3,
    userId: 'a'
  },
  {
    id: 4,
    userId: 'b'
  }],
  comments: [{
      id: 2,
      userId: 'jungyeol260',
      comment: '와드 박고 갑니다',
  }],
  createdAt: '20시간 전'
}

const instaElement = document.querySelector('.insta')

function handleHeart() {
  var heartElement = document.querySelector('.heart')
  heartElement.classList.toggle('heart-red')
}

instaElement.innerHTML = `
  <div>${instaData.userId}</div>
  <div class="location">${instaData.location}</div>
  <div class="picture-wrapper">
    <img src="${instaData.picture}" width="200px" height="400px" />
  </div>
  <div class="heart" onclick="handleHeart()">♡</div>
  <div>${instaData.liked[0].userId} 님 외 ${instaData.liked.length}명이 좋아합니다</div>
  <div>${instaData.comments[0].userId}님의 댓글</div>
  <div>${instaData.comments[0].comment}</div>
  <div>${instaData.createdAt}</div>
`

const pictureWrapperElement = document.querySelector('.picture-wrapper')
pictureWrapperElement.addEventListener('dblclick', () => {
  handleHeart()
  window.setTimeout(() => {
    pictureWrapperElement.innerHTML = '♡'
  }, 2000)  
})

const temperatureElement = document.querySelector('.location')

let temperature
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8042367a40d903407a2eee2c0cfa759a')
  .then((response) => {
    temperature = response.data.main.temp
    temperature = Math.ceil(temperature - 273.15)
    temperatureElement.innerHTML = `${instaData.location}의 온도는 ${temperature}도`
  })




