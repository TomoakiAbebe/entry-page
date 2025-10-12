// Lucideアイコンを初期化
lucide.createIcons();

// 固定ボタンのスクロール表示制御
window.addEventListener('scroll', function() {
  const fixedButton = document.querySelector('.fixed-apply-button');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // ページトップから少しスクロールしたら表示
  if (scrollTop > 200) {
    fixedButton.style.opacity = '1';
    fixedButton.style.visibility = 'visible';
  } else {
    fixedButton.style.opacity = '0.8';
  }
});

// ページ読み込み時の初期状態設定
document.addEventListener('DOMContentLoaded', function() {
  const fixedButton = document.querySelector('.fixed-apply-button');
  fixedButton.style.opacity = '0.8';
  fixedButton.style.visibility = 'visible';
});