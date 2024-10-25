// HTMLの読込に完了したら、「loadイベントが発生しました」のメッセージをコンソールに出力する
$(window).on("load", function () {
  console.log("loadイベントが発生しました");
});
// 画面をスクロールしたら、「scrollイベントが発生しました」のメッセージをコンソールに出力する
$(window).on("scroll", function () {
  console.log("scrollイベントが発生しました");
});

/* loadイベントログを表示させるためにHTML要素をすべて読み込んだ後に～の処理は記述しない
    $(function () {});
*/
