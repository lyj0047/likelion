let HelloBtn = document.getElementById('HelloBtn');
let clickListener = function() {
  alert('안녕하세요!');
};
HelloBtn.addEventListener('click', clickListener);

//Bye 버튼을 클릭하면 다시 Hello 버튼을 클릭해도 더 이상 'Hello' 알림창이 나타나지 않는다.
let ByeBtn = document.getElementById('ByeBtn');
ByeBtn.addEventListener('click', function() {
  HelloBtn.removeEventListener('click', clickListener);
});

//사진을 누르면 배경이 바뀐다.
function changeImg() {
  let lyjJpg = document.getElementById('blueLyj');
  if (lyjJpg.src.match("blue")) {
    lyjJpg.src = "static/images/white_lyj.jpg"
  }
  else {
    lyjJpg.src = "static/images/blue_lyj.jpg"
  }
}