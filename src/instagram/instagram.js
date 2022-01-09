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
      userId: 'jungyeol260'
  }],
  createdAt: '20시간 전'
}

const instaElement = document.querySelector('.insta')

instaElement.innerHTML = `
  <div>${instaData.userId}</div>
  <div>${instaData.location}</div>
  <img src="${instaData.picture}" width="200px" height="400px" />
  <div>${instaData.liked[0].userId} 님 외 ${instaData.liked.length}명이 좋아합니다</div>
  <div>${instaData.comments.length}</div>
  <div>${instaData.createdAt}</div>
`

