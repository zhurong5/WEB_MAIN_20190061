document
  .getElementById("search_button_msg")
  .addEventListener("click", search_message); // 똑같은 함수가 여러개일때 밑에있는 함수가 먼저 실행됨!
function search_message() {
let message = "검색을 수행합니다!"
  alert(message);
}