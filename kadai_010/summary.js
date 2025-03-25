// summary.js
$(document).ready(function() {
  // 色を変更する
  $("#change-color").on("click", function() {
      $("#target").css("color", "blue"); // 色はお好みで変更できます！
  });

  // 文字を切り替える
  $("#change-text").on("click", function() {
      $("#target").text("Hello!");
  });

  // フェードアウトする
  $("#fade-out").on("click", function() {
      $("#target").fadeOut(); 
  });

  // フェードインする
  $("#fade-in").on("click", function() {
      $("#target").fadeIn(); 
  });
});