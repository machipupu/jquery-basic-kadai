// ドキュメントが読み込み完了したときに実行
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// 画面がスクロールされたときに実行
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});